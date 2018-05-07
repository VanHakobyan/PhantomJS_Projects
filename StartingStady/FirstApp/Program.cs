using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NReco.PhantomJS;

namespace FirstApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var phantomJs = new PhantomJS();
            phantomJs.OutputReceived += (sender, e) => {
                Console.WriteLine($"PhantomJS output: {e.Data}");
            };
            phantomJs.RunScript("for (var i=0; i<10; i++) console.log('hello from js '+i); phantom.exit();", null);
        }
    }
}
