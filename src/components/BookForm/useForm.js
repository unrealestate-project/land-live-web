import { useState, useEffect } from 'react';
import { notification } from 'antd';
import axios from 'axios';

const useForm = (validate, t) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = (type) => {
    if (type === 'success') {
      notification[type]({
        message: t('Success 💫'),
        description: t('Your tour has been booked!'),
      });
    } else {
      notification[type]({
        message: t('Sorry 😔'),
        description: t('You already booked tour!'),
      });
    }
  };

  const handleSubmit = (event, url) => {
    event.preventDefault();
    setErrors(validate(values, t));
    if (Object.keys(values).length === 1) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          openNotificationWithIcon('error');
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues('');
      openNotificationWithIcon('success');
    }
    // eslint-disable-next-line
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: '' }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
