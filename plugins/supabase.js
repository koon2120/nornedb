import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {
    const supabase = createClient(nuxtApp.$config.public.supabaseUrl, nuxtApp.$config.public.supabaseKey);
    return {
        provide: {
            supabase
        }
    }
});
