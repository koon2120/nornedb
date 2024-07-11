import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data } = await client
    .from("nornedb_webconfig")
    .select("value")
    .eq("key", "yggdra_item_code_update")
    return {
        status:200,
        responseData: data
    }
  })