import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bmlowyvpsiazzrarwkuk.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtbG93eXZwc2lhenpyYXJ3a3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NjUwNjQsImV4cCI6MjA5NDU0MTA2NH0.QoDrFCgU_z_SHFfbSEwN3ivvKGCTc1NBmygVDzWLytI

export const supabase = createClient(supabaseUrl, supabaseKey)