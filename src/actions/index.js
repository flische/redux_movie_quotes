import types from './types';

export const signIn = () => ({type: types.SIGN_IN});
// export function signIn(){          // <--- same thing! only difference (in JS) is that this one would get hoisted!
//     return {type: types.SIGN_IN}
// };
    
export const signOut = () => ({type: types.SIGN_OUT});

export const signUp = () => ({type: types.SIGN_UP});

