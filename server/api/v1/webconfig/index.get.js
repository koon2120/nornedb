import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data } = await client.from('nornedb_webconfig').select('*')
    return {
        status:200,
        responseData: data
    }
  })