import { createClient } from '@supabase/supabase-js';

export async function POST(req){
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const data = await req.json();
    const {email,subject,message} = data;
    const { error } = await supabase.from('Messages').insert([
        { email, subject, message }
    ]);
    return new Response("Done")
    
}