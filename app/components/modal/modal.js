import React, {useEffect} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {ModalStyles as styles} from './modal.styles';

export const CustomModal = props => {
  const {
    title,
    subtitle,
    btnOne,
    btnTwo,
    btnOneClick,
    btnTwoClick,
    children,
    timerMs,
    visiblilty,
    modalCtrl,
    navigation,
  } = props;

  useEffect(() => {
    if (visiblilty && timerMs) setTimeout(() => modalCtrl(false), timerMs);
  }, [visiblilty]);

  return (
    <Modal
      style={styles.CENTERED_VIEW}
      animationType="fade"
      transparent={true}
      visible={visiblilty}
      onRequestClose={() => {
        modalCtrl(false);
      }}>
      <View style={styles.CONTAINER}>
        {/* <View style={{alignSelf:'flex-end', position:'absolute', top: 35}}>
          <Header
            navigation={navigation}
            color={palette.white}
            profilBtn={false}
            callback={() => modalCtrl && modalCtrl(false)}
          />
        </View> */}
        <View style={styles.MODAL_VIEW}>
          <View style={styles.TITLE_VIEW}>
            {title && (
              <Text style={{...styles.TEXT, fontWeight: 'bold', fontSize: 17}}>
                {title}
              </Text>
            )}
            {subtitle && (
              <Text style={{...styles.TEXT, fontSize: 13, textAlign: 'center'}}>
                {subtitle}
              </Text>
            )}
          </View>
          {children}
          {(btnOne || btnTwo) && (
            <>
              {btnOne && (
                <TouchableOpacity
                  onPress={() => {
                    modalCtrl && modalCtrl(false);
                    btnOneClick ? btnOneClick() : null;
                  }}
                  style={styles.TOUCH}>
                  <Text
                    style={{
                      ...styles.TEXT,
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 0,
                    }}>
                    {btnOne ? btnOne : 'OK'}
                  </Text>
                </TouchableOpacity>
              )}
              {btnTwo && (
                <TouchableOpacity
                  onPress={() => {
                    modalCtrl && modalCtrl(false);
                    btnTwoClick ? btnTwoClick() : null;
                  }}
                  style={styles.TOUCH}>
                  <Text style={{...styles.TEXT, fontSize: 16, marginBottom: 0}}>
                    {btnTwo ? btnTwo : 'Cancel'}
                  </Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};
