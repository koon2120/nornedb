import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data } = await client
    .from("yggdra_character")
    .select("character_name_jp,character_name_eng,character_name_th,yggdra_seiyuu(seiyuu_name_th,seiyuu_name_eng),yggdra_origin(origin_name_jp,origin_name_eng,origin_name_th)")
    .eq("character_name_eng", getRouterParam(event, 'id'));
    if (data.length == 0) {
        return {
            status:404,
            responseData: "Not Found"
        }
    }else {
        return {
            status:200,
            responseData: data
        }
    }
  })