export default function validate(values, t) {
  let errors = {};
  if (!values.kakaotalk_id) {
    errors.kakaotalk_id = t('KakaoTalk ID is required');
  }
  return errors;
}
