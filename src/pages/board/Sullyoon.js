import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://chvxhvyrbalhmzrqymee.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodnhodnlyYmFsaG16cnF5bWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4OTM0NjUsImV4cCI6MjAwNzQ2OTQ2NX0.iYKEpE2n3Zmut1HPD7DKzedDvArWTf-h_Qyyqc2NSTY");

const Sullyoon = () => {
    const [sullyoon, setSullyoon] = useState([]);

    useEffect(() => {
        getSullyoon();
    }, []);

    async function getSullyoon() {
        const { data } = await supabase.from("sullyoon").select();
        setSullyoon(data);
    }
    return (
        <div className="w-full">
            <div className="m-4 p-8 bg-primary/50 rounded-lg">
                <p className="text-3xl">설윤</p>
            </div>
            <div className="m-4">
                {sullyoon.map((sullyoon) => (
                    <li key={sullyoon.created_at}>{sullyoon.id}</li>
                ))}
            </div>
        </div>
    );
};

export default Sullyoon;