import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider
  } from 'angularx-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('456970916647-s34ip4orr64rk45a7b63672ehrti5htm.apps.googleusercontent.com')
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("175122853564083")
      }
    ]);
  
    return config;
  }