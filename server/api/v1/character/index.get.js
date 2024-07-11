import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data } = await client
    .from("yggdra_character")
    .select("character_id,character_name_th,character_name_eng")
    .order("character_id", { ascending: true });
    return {
        status:200,
        responseData: data
    }
  })