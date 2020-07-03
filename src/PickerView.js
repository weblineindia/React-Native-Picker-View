/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';
import Styles from './Styles';
import { Blue, Black, Separator, PrimaryDark } from './Globals';

type IProps = {
    data: Array,
    title: String,
    defaultSelection: [String, Number],
    themePrimary: String,
    separatorColor: String,
    titleStyle: Object,
    selectedValueStyle: Object,
    defaultValueStyle: Object,
    cancelBtnStyle: Object
};

type IState = {};

export default class PickerView extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            viewHeight: 0,
            data: this.props.data,
            selectedValue: this.props.defaultSelection,
            themePrimary: this.props.themePrimary !== '' && this.props.themePrimary !== undefined ? this.props.themePrimary : Black,
            separatorColor: this.props.separatorColor !== '' && this.props.separatorColor !== undefined ? this.props.separatorColor : Separator,

        };
    }

    /**
     * flatlist item separator
     */

    flatListItemSeparator = () => <View style={[Styles.dashView, { backgroundColor: this.state.separatorColor }]} />;

    /**
     * Method for close the modal
     */

    onCloseModal() {
        this.props.closeModal(false);
    }

    /**
     * Set state for selected value
     * 
     *  @param {*} item 
     *  @param {*} index 
     */

    selectedValue(item, index) {
        this.setState({ selectedValue: item }, () => {
            this.flatlist && this.flatlist.scrollToIndex({ index: index, animated: true })
        })
        this.props.onChangeValue(item, index);
    }

    find_dimesions(layout) {
        const { x, y, width, height } = layout;
        this.setState({ viewHeight: height }, () => {
            console.log("viewHeight--->>", this.state.viewHeight);
        });
    }

    /**
     * render data list which is passed through data props
     * 
     *  @param {*} item 
     *  @param {*} index 
     */

    renderItemList(item, index) {
        return (
            <TouchableOpacity
                onPress={() => this.selectedValue(item, index)}
                onLayout={event => { this.find_dimesions(event.nativeEvent.layout) }}>
                <View style={Styles.bankListItemView}>
                    <Text style={[Styles.itemTxt, this.props.defaultValueStyle,
                    { color: (item == this.state.selectedValue) ? this.state.themePrimary : Black, fontWeight: (item == this.state.selectedValue) ? '700' : '300' },
                    (item == this.state.selectedValue) ? this.props.selectedValueStyle : null,
                    ]}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { data } = this.state;
        return (
            <View style={Styles.ModelContainerView}>
                <Modal
                    animationType="fade"
                    transparent
                    visible={this.props.openModel}
                    onRequestClose={() => {
                        this.onCloseModal();
                    }} >
                    <View style={[Styles.Container]}>
                        <TouchableWithoutFeedback onPress={() => this.onCloseModal()}>
                            <View style={Styles.MainView} />
                        </TouchableWithoutFeedback>

                        <View style={[Styles.WhiteView]}>
                            <View style={[Styles.titleView, { backgroundColor: this.state.themePrimary }]}>
                                <Text style={[Styles.titleTxt, this.props.titleStyle]}>{this.props.title}</Text>
                            </View>
                            <View>
                                <FlatList
                                    ref={flatlist => this.flatlist = flatlist}
                                    data={data}
                                    pagingEnabled
                                    style={{ height: data.length > 5 ? (this.state.viewHeight * 5) + 4 : null }}
                                    renderItem={({ item, index }) => this.renderItemList(item, index)}
                                    keyExtractor={(x, i) => i.toString()}
                                    ItemSeparatorComponent={this.flatListItemSeparator}
                                    extraData={this.state}
                                />
                            </View>
                            <View style={[Styles.dashView, { backgroundColor: this.state.separatorColor }]} />
                            <View style={Styles.ButtonMainView}>
                                <View style={Styles.CancelView}>
                                    <TouchableOpacity onPress={() => this.onCloseModal()}>
                                        <Text style={[Styles.CancelText, this.props.cancelBtnStyle]}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
