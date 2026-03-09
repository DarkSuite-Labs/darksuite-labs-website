import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hhmsneyljyugthrmktkt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobXNuZXlsanl1Z3Rocm1rdGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMTc4MTYsImV4cCI6MjA4ODU5MzgxNn0.TWxc5TscIPTLStEhTjibbp82Gk02vj35QrZxYxIgbSQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
