import React from 'react';
import PickerView from './PickerView';

export default function Picker(WrapperComponent) {
    class UpdateComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false,
                pickerData: {},
                completionHandler: undefined,
                selectedValue: ''
            };
        }

        /**
         * Method for showPicker view and manage state for show and hide picker view.
         * Pass the props to the alertView component
         */

        showPicker(object, completionHandler = (value, index) => {
        }) {
            this.setState({
                pickerData: object,
                isModalOpen: true,
                completionHandler: completionHandler,
            });
        }

        /**
         * callback after selecting the value from picker
         */

        onChangeValue = (value, index) => {
            this.state.completionHandler(value, index);
            this.setState({ isModalOpen: false });
        }

        /**
         * Method for close the modal
         */

        closeModal() {
            this.setState({ isModalOpen: false });
        }

        render() {
            return (
                <>
                    <WrapperComponent
                        isModalOpen={this.state.isModalOpen}
                        showPicker={(object, completionHandler) => this.showPicker(object, completionHandler)}
                        selectedValue={this.state.selectedValue}
                    />
                    {this.state.isModalOpen &&
                        <PickerView
                            openModel={this.state.isModalOpen}
                            closeModal={this.closeModal.bind(this)}
                            data={this.state.pickerData.data}
                            onChangeValue={(value) => this.onChangeValue(value)}
                            title={this.state.pickerData.title}
                            defaultSelection={this.state.pickerData.defaultSelection}
                            themePrimary={this.state.pickerData.themePrimary}
                            separatorColor={this.state.pickerData.separatorColor}
                            titleStyle={this.state.pickerData.titleStyle}
                            selectedValueStyle={this.state.pickerData.selectedValueStyle}
                            defaultValueStyle={this.state.pickerData.defaultValueStyle}
                            cancelBtnStyle={this.state.pickerData.cancelBtnStyle}
                        />
                    }
                </>
            );
        }
    }
    return UpdateComponent;
}
