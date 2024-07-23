import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { data } = await client
    .from("yggdra_top100")
    .select("id,no,guild_name,point,season")
    .eq("season", getRouterParam(event, 'id'))
    .order("no", { ascending: true })
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