/**
 * 
 * Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
 */

function nextId(ids){
    const id = ids.sort(((a, b)=> {
        return a - b;
      }));
    let unusedID
    if(id[0]!==0){
        unusedID = 0
    } else{
        for(let i = 0; i<id.length; i++ ){
            const diff = id[i+1]-id[i];
            if(diff>1 || i===id.length-1){
                unusedID = id[i]+1;
                break;
            }else{
                continue;
            }
        }
    }

    return unusedID
  }

