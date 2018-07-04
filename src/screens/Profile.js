import React, {
  Component
} from 'react';
import {
  ActivityIndicator,
  Button,
  View
} from 'react-native';
import {
  connect
} from 'react-redux';
import styled from 'styled-components';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';

import {
  saveFormInfo,
  getFormInfo
} from '../actions/profile';

import {
  FormInput
} from '../components';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.fields
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.getFetch === true && this.props.getFetch !== nextProps.getFetch) {
      this.setState({ ...nextProps.fields });
    }
  }

  componentDidMount() {
    this.props.getFormInfoAction();
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  }

  handleSavePress = () => {
    this.props.saveFormInfoAction(this.state);
  }

  render() {
    const { fields, saveFetch, getFetch } = this.props;
    return (
      <Wrapper>
        <ShadowWrapper>
          {
            getFetch ? (
              <ActivityIndicator size="large" color="#303030" />
            ) : (
              <View>
                {
                  Object.keys(fields).map((field, index) => (
                    <FormInput
                      key={index}
                      label={field}
                      value={this.state[field]}
                      onChange={this.handleInputChange}
                    />
                  ))
                }
                {
                  saveFetch ? (
                    <ActivityIndicator size="small" color="#303030" style={{ marginTop: 15 }} />
                  ) : (
                    <Button
                      title="Save"
                      onPress={this.handleSavePress}
                    />
                  )
                }
              </View>
            )
          }
        </ShadowWrapper>
      </Wrapper>
    );
  }
};

const mapStateToProps = state => ({
  fields: state.profile.fields,
  getFetch: state.profile.getFetch,
  saveFetch: state.profile.saveFetch
});

const mapDispatchToProps = dispatch => ({
  saveFormInfoAction: data => dispatch(saveFormInfo(data)),
  getFormInfoAction: () => dispatch(getFormInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 10px;
`;
const ShadowWrapper = styled(KeyboardAwareScrollView)`
  padding: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px #303030;
  shadow-opacity: 0.5;
  width: 100%;
`;
