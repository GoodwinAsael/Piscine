async function my_fetch(url) {


    try
    {
        const response = await fetch(url);
        if(response.ok)
        {
              const result = await response.json()
                //console.log(result)
            console.log('all is good')
        }
        else{
            console.log("shit happens")
        }
    }



    catch (error)
    {
        console.log("VOICI L'ERREUR : " + error)
    }




}

my_fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528');


