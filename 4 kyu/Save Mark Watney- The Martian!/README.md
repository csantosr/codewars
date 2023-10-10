# [Save Mark Watney- The Martian!](https://www.codewars.com/kata/57fcadd2334ad3bbbc00023c)
## By [iamchingel](https://www.codewars.com/users/iamchingel)
![badge](https://www.codewars.com/users/csantosr/badges/small)
<hr/>
During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive. Millions of miles away, NASA and a team of international scientists work tirelessly to bring "the Martian" home, while his crewmates concurrently plot a daring, if not impossible, rescue mission. As these stories of incredible bravery unfold, the world comes together to root for Watney's safe return.

Mark faces a new problem as he tries to travel using his MAV, to potential working pathfinders, which will help him survive till ETA of the mission! He must be careful about the distance he travels else he may risk exhausting his resources far too soon. Mark has the co-ordinates of the places he needs to search. Help him find the distance when provided with lattitudes and longitudes.

You will recieve inputs in the format: "48.23° N, 89.10° E" , "48.94° N, 89.40° E". The final result must be in KM. 

The radius of planet Mars is estimated to be `3,390 KM`.  Mark doesn't need the actual distance, he is happy with the result being precise to the lowest 10KM. For example `36.09KM`should be rounded down to `30KM`as result!
For simplicty use `1° = 0.0174533 radians`. 

Hint: Take care of the direction and you may want to use the Haversine formula ;)

`Show some love; rank and upvote. Thank you Codewarrior!`
<hr/>

## Haversine Formula

$$distance_{c_1, c_2}=2r\cdot sin^{-1}\left(\sqrt{hav(lt_2-lt_1)+cos(lt_1)\cdot cos(lt_2)\cdot hav(lg_2-lg_1)}\right)$$

$$hav(\theta)=sin^2\left(\frac{\theta}{2}\right)$$