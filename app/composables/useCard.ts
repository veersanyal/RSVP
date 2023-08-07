const resource = 'https://us-central1-rsvp-e9540.cloudfunctions.net/api/card/';
export const useCard = () => {
    const get = async (id?: string) => {
        const response = await fetch(resource + id)
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else { console.log('error'); };
    }
    const getAll = async () => {
        try {
            const response = await fetch(resource, {
                method: 'GET',
                headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (e) {
            console.log(e);
        };
    }
    const save = async (data: Partial<EventCard>) => {
        const response = await fetch(resource, {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responsedata = await response.json();
        return responsedata;
    }
    const setRSVP = async (data: any) => {
        const response = await fetch(resource + data.id + '/setRSVP', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.rsvp)
        });
        const responsedata = await response.json();
        return responsedata;
    }

    return { save, getAll, get, setRSVP };
}