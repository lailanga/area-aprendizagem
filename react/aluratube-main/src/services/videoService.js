import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://usgszfkxmhcyctmwduyw.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzZ3N6Zmt4bWhjeWN0bXdkdXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxNTI2MDcsImV4cCI6MTk5MTcyODYwN30.-V0xlfhOAJG2zsUUu8rZkQxY05nPk8cvNICjr57cfac";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}