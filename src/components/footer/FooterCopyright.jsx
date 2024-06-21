// FooterCopyright.jsx
import React from 'react';

const FooterCopyright = () => {
 return (
    <div className="flex gap-5 justify-start pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto self-start my-auto mr-auto text-lg font-semibold leading-7 text-left text-neutral-600">
        <p>Copyright © 2024 SiGu</p>
      </div>
      <div className="flex gap-1.5 justify-between text-3xl tracking-tighter leading-8 whitespace-nowrap text-zinc-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab"
                className="mt-auto ml-0.5 w-20 aspect-[0.96] max-w-[500px]"
              />
              <div className="grow my-auto text-2xl">
                <p>
                  <strong className="text-blue-500">Forum</strong>
                  <strong>VIAJEROS</strong>
                </p>
              </div>
            </div>
    </div>
 );
};

export default FooterCopyright;
