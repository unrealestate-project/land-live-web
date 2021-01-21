export default function validate(values) {
  let errors = {};
  if (!values.kakaotalk_id) {
    errors.kakaotalk_id = 'KakaoTalk ID is required';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  }
  return errors;
}
