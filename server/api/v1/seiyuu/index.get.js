import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data } = await client
    .from("yggdra_seiyuu")
    .select(
      "seiyuu_id,seiyuu_name_th,seiyuu_name_eng,yggdra_character(character_name_th,character_name_eng)"
    )
    .order("seiyuu_id", { ascending: true });
    return {
        status:200,
        responseData: data
    }
  })