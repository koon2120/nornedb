import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data } = await client
    .from('yggdra_item_code')
    .select()
    .order("id", { ascending: true })
    return {
        status:200,
        responseData: data
    }
  })