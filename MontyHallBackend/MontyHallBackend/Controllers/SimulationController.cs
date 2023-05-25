using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MontyHallBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimulationController : ControllerBase
    {
     

        [HttpPost("calculate")]
        public IActionResult Simulate(InitialValueDTO values)
        {
            {
                int wins = 0;
                int lost = 0;
                Random random = new Random();

                for (int i = 0; i < values.numberOfSimulations; i++)
                {
                    int winningDoor = random.Next(1, 4);
                    int initialChoice = random.Next(1, 4);

                    if (values.changeDoor)
                    {
                        if (initialChoice == winningDoor)
                            lost++;
                        else
                            wins++;
                    }
                    else
                    {
                        if (initialChoice == winningDoor)
                            wins++;
                        else
                            lost++;
                    }
                }

                var result = new
                {
                    winCount = wins,
                    total = values.numberOfSimulations
                };

                return Ok(result);
            }
        }
    }
}