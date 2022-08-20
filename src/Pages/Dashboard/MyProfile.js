import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import avatar from '../../assets/portFolioImg/avatar.png'
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
   
    return (
        <section class="text-gray-600 h-screen bg-stone-200 body-font">
        <div class="container px-5 pt-16 mx-auto flex flex-wrap flex-col">
         
          <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={avatar} />
          <div class="flex flex-col  text-center w-full">
            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">{user.displayName}</h1>
            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">{user.email}</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Money doesn't mean anything to me. I've made a lot of money, but I want to enjoy life and not stress myself building my bank account. I give lots away and live simply, mostly out of a suitcase in hotels. We all know that good health is much more important.
Read more...</p>
          </div>
        </div>
      </section>
    );
};

export default MyProfile;