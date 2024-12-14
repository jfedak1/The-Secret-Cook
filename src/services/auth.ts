import supabase from './supabaseClient';

export async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: 'valid.email@supabase.io',
      password: 'example-password',
      options: {
        emailRedirectTo: 'https://www.thesecretcook.com/groups',
      },
    })
    if (error) throw error
    return data;
  }
    
