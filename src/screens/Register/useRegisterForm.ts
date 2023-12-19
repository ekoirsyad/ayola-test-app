import {useState, useCallback, useMemo} from 'react';
import {isEmailValid, isPasswordValid} from '../../helpers';

interface RegisterFormData {
  email: string;
  password: string;
}

const useRegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
  });

  const isButtonDisabled = useMemo(() => {
    return (
      isEmailValid(formData.email) === false ||
      isPasswordValid(formData.password) === false
    );
  }, [formData.email, formData.password]);

  const handleEmailChange = useCallback((email: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      email,
    }));
  }, []);

  const handlePasswordChange = useCallback((password: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      password,
    }));
  }, []);

  return {formData, handleEmailChange, handlePasswordChange, isButtonDisabled};
};

export default useRegisterForm;
