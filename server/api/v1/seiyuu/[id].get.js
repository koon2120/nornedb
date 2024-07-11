import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    let param = getRouterParam(event, 'id')
    param = param.replace("%20"," ")
    const client = await serverSupabaseClient(event)
    const { data } = await client
    .from("yggdra_seiyuu")
    .select("seiyuu_name_th,seiyuu_name_eng,seiyuu_name_jp,seiyuu_info_wikipedia,seiyuu_info_myanimelist,dateofbirth,yggdra_character(character_name_th,character_name_eng)")
    .eq("seiyuu_name_eng", param);
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