import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req) {
    const { email, password } = await req.json();
    const cookieStore = await cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const { data, error } = await supabase.auth.signUp({ email, password });

    await supabase.auth.setSession(data.session);

    return new Response(JSON.stringify({ user: data.user }), { status: 200 });
}
