using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ccurrencycalculator
{
    class Currency {
         private string name { get; set; }
        private double value {  get; set; }
        public Currency(string name,double value ) {
            this.name = name;

            this.value = value;
        }
        public Currency()
        {
           
        }

        public void Print_int() {
            Console.WriteLine("The name  of  currency: {0}", name);
            Console.WriteLine("Exchange  rate : {0}", value);

        }
       



    }


    class Transform: Currency {
        private int quant { get; set; }



        Currency member;

      


        public  Currency[] Fill() {

             


            Currency[] table = new Currency[quant];
            for (int i = 0; i < quant; i++)
            {
                string name;
                double value;
                Print(out name, out value);
                table[i] = new Currency(name, value);
            }


            return table;
        }

        public void Print( out string name, out double value)
        {
            name = Console.ReadLine();
            value = Convert.ToDouble(Console.ReadLine());
        }





    }

    class Core
    {
        public static void Main() {


        }
    }
}
