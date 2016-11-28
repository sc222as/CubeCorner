using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace NumberGuessingGame.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            ScriptBundle thirdPartyScripts = new ScriptBundle("~/Scripts/ThirdParty");
            thirdPartyScripts.Include("~/scripts/jquery-{version}.js",
                                "~/scripts/bootstrap.min.js");

            bundles.Add(thirdPartyScripts);
            BundleTable.EnableOptimizations = true;
        }
    }
}