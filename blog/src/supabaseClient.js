import { createClient, creteClient } from "@supabase/supabase-js"

const supabase = createClient(
"https://swvcaftqqrmxxmjriscz.supabase.co/",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3dmNhZnRxcXJteHhtanJpc2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2Nzk0MjgsImV4cCI6MjA0MjI1NTQyOH0.hLz9FQELNoF-Prol8k64rbALnVLl4R_vPyXhGveutwk"
);

export default supabase;