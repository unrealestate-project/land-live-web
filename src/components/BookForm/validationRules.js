export default function validate(values, t) {
  let errors = {};
  if (!values.kakaotalkId) {
    errors.kakaotalkId = t('KakaoTalk ID is required');
  }
  return errors;
}
