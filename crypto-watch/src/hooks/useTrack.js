import { useState } from "react";

export const useTrack = () => {
    const [trackError, setTrackError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const track = async (userID, trackCoins) => {
        setIsLoading(true);
        setTrackError(null);

        const response = await fetch('https://crypto-watch-server.vercel.app/api/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userID, trackCoins }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setTrackError(json.error);
            console.log('hook', json.error);
            return false;
        }

        if (response.ok) {
            setIsLoading(false);
            return true;
        }
    }
    return { track, trackError, isLoading }
}
