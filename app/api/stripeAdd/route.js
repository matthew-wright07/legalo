import { createClient } from '@supabase/supabase-js';

export async function POST(req){
    const request = await req.json();
    if (request.type==="invoice.payment_succeeded"){
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
        const email = request.data.object.customer_email;
        const { data, error } = await supabase
        .from('Paying')
        .insert([
        { email: email, paying: true },
    ])
    .select()
    console.log(data)
    }
    return new Response("Done")
}