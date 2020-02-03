/**
 * 
 * Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.
 */

function past(h, m, s){
    var hourMs = h* 60*60*1000;
    var minMs = m* 60*1000;
    var sekMs = s* 1000;
    
    return hourMs+minMs+sekMs;
    
    }