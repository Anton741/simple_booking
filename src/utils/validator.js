export const validator = (value,fieldName, config) => {
  let errors = []
  console.log(value);
    function validate(data, validateMethod, config){
      switch (validateMethod) {
        case 'isRequired':
          if (data.trim().length <= 0) {
            return config.message;
          }
          break;
        case 'minLength':
          if (data.trim().length < 8) {
            return config.message;
          }
          break;
        case 'hasRussianLetters':
          const reg = /[а-яА-Я]/
          return reg.test(data) ? config.message : '';
        case 'emailValid':
          console.log('dfdfdfdf');
          const reg2 = /\S+@\S+.[ru,com]/
          console.log(reg2.test(data));
          return !reg2.test(data) ? config.message : '';
        default:
          break
      }
      return null
    }
      for (const validateMethod in config[fieldName]){
        let error = validate(value, validateMethod, config[fieldName][validateMethod])
        !errors.includes(error) && error && errors.push(error) 
        
      }
      console.log('FIELDNAME', fieldName );
      console.log('ERRORS',errors);
    return errors.length>0 ? errors : [] ;
  }






// export const validator = (data, config) => {
//   let errors = []
//     function validate(data, validateMethod, config){
//       switch (validateMethod) {
//         case 'isRequired':
//           if (data.trim().length <= 0) {
//             return config.message;
//           }
//           break;
//         case 'minLength':
//           if (data.trim().length < 8) {
//             return config.message;
//           }
//           break;
//         case 'hasRussianLetters':
//           const reg = /[а-яА-Я]/
//           return reg.test(data) ? config.message : '';
//         case 'emailValid':
//           console.log('dfdfdfdf');
//           const reg2 = /\S+@\S+.[ru,com]/
//           console.log(reg2.test(data));
//           return !reg2.test(data) ? config.message : '';
//         default:
//           break
//       }
//       return null
//     }
//     for (const fieldName in data){
//       for (const validateMethod in config[fieldName]){
//         let error = validate(data[fieldName], validateMethod, config[fieldName][validateMethod])
//         !errors.includes(error) && error && errors.push(error) 
        
//       }
//     }
//     return errors.length>0 ? errors : null ;
//   }