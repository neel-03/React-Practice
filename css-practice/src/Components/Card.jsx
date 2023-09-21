import React from 'react';


function Card({ name = "Username", content = "null content", place = "place not mentioned" }) {
    return (
        <><figure class="m-10 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://picsum.photos/384/512" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p class="text-lg font-medium">
                        {content}
                    </p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                        {name}
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        {place}
                    </div>
                </figcaption>
            </div>
        </figure>
        </>
    )
}

export default Card