class Github{
     constructor(){
          this.client_id = 'c96cf5023dfb2935a975'
          this.client_secret = 'a490418875d41bd431b9952569d4d4a53e34a869'

     }
     async getUser(user){
           const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
          const profile = await profileResponse.json()
          return {
               profile
          }

     }
}