import React, {useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import {useForm, FormProvider, Controller} from 'react-hook-form';
import {
  GolfDarkGreen,
  GolfGrassGreen,
  GolfGrey,
  GolfLightPink,
  GolfRed,
  GolfYellow,
} from '../styles/Colors';
import {FontStyles} from '../styles/FontStyles';

const windowWidth = Dimensions.get('window').width;

const ContactForm: React.FC = () => {
  const methods = useForm();
  const {
    reset,
    handleSubmit,
    formState: {errors},
    control,
  } = methods;

  const firstNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const commentRef = useRef<TextInput>(null);

  const onSubmit = () => {
    // Logic for a POST request to a server would go here.
    Alert.alert(
      'Thank you!',
      'Your submission has been received! We will respond as soon as possible.',
      [
        {
          text: 'OK',
          onPress: () => {
            reset();
            firstNameRef.current?.blur();
            emailRef.current?.blur();
            commentRef.current?.blur();
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>
            First Name
            <Text style={styles.requiredIndicator}>
              {errors.firstName && ' *'}
            </Text>
          </Text>
          <Controller
            control={methods.control}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <TextInput
                  ref={firstNameRef}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  maxLength={40}
                  selectionColor={GolfGrey}
                  style={[
                    styles.inputBase,
                    styles.inputField,
                    {color: errors.firstName ? GolfRed : GolfYellow},
                    errors.firstName ? styles.errorField : null,
                  ]}
                />
                {errors.firstName && (
                  <Text style={styles.errorText}>This field is required</Text>
                )}
              </>
            )}
            name="firstName"
            rules={{required: true}}
            defaultValue=""
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>
            Email Address
            <Text style={styles.requiredIndicator}>{errors.email && ' *'}</Text>
          </Text>
          <Controller
            control={methods.control}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <TextInput
                  ref={emailRef}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  maxLength={40}
                  selectionColor={GolfGrey}
                  style={[
                    styles.inputBase,
                    styles.inputField,
                    {color: errors.email ? GolfRed : GolfYellow},
                    errors.email ? styles.errorField : null,
                  ]}
                />
                {errors.email && (
                  <Text style={styles.errorText}>
                    {errors.email.type === 'required'
                      ? 'This field is required'
                      : 'Invalid email address format'}
                  </Text>
                )}
              </>
            )}
            name="email"
            rules={{
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address format',
              },
            }}
            defaultValue=""
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>
            Question or Comment
            <Text style={styles.requiredIndicator}>
              {errors.comment && ' *'}
            </Text>
          </Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <TextInput
                  ref={commentRef}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  selectionColor={GolfGrey}
                  style={[
                    styles.inputBase,
                    styles.commentBox,
                    {color: errors.comment ? GolfRed : GolfYellow},
                    errors.comment ? styles.errorField : null,
                  ]}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
                {errors.comment && (
                  <Text style={styles.errorText}>This field is required</Text>
                )}
              </>
            )}
            name="comment"
            rules={{required: true}}
            defaultValue=""
          />
        </View>
        <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </Pressable>
      </FormProvider>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: GolfDarkGreen,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  inputWrapper: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  inputLabel: {
    ...FontStyles.bold,
    color: GolfGrey,
    fontSize: 15,
    marginVertical: 2,
  },
  inputBase: {
    ...FontStyles.regular,
    marginBottom: 2,
    padding: 10,
    width: windowWidth * 0.8,
    backgroundColor: GolfGrassGreen,
    color: GolfYellow,
  },
  inputField: {
    height: 'auto',
    minHeight: 40,
  },
  commentBox: {
    minHeight: 160,
    flexShrink: 1,
  },
  submitButton: {
    backgroundColor: GolfGrassGreen,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  submitButtonText: {
    ...FontStyles.bold,
    color: GolfYellow,
    textAlign: 'center',
  },
  errorText: {
    ...FontStyles.semiBoldItalic,
    color: GolfLightPink,
    marginLeft: 5,
    alignSelf: 'flex-start',
    padding: 3,
  },
  requiredIndicator: {
    color: GolfLightPink,
  },
  errorField: {
    backgroundColor: GolfLightPink,
  },
});
