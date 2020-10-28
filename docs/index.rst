.. Remix Plugin Directory documentation master file, created by
   sphinx-quickstart on Tue Oct 27 18:24:31 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Remix Plugin development
==================================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

Documentation guidelines
------------------------

Great documentation is crucial to the success of your plugin. We encourage you to publish your docs on `Read the docs <https://readthedocs.org/>`__.

We have some great tips on how to make your documentation effective.

**Clearly state the purpose of your plugin**

   Describe in detail what the plugin does. Do not assume any knowledge on the part of your user, introduce all the concepts and technologies. 
   Use external links to anything related to your plugin.

**Who is your plugin for?**

   Define who your user is, what they might need and what they might get out of using your plugin.

**Requirements**

   What is needed to successfully run the plugin? Some plugins might need other software or services to run. Provide information, links and step by step guides to setting those up.

   In some cases certain functionalities or settings in the Remix environment are needed. Clearly state the knowledge and steps needed. If possible provide links to sections in the `Remix documentation <https://remix-ide.readthedocs.io/en/latest/index.html>`__ that explain what the user needs to know.


**Installation and configuration**

   Tell your user where to find your plugin the Remix directory and how to set it up. Your plugin will have an icon in the sidebar of Remix, show your user what it is.

**Set by step demonstration**

   The best way to explain your plugin is by demonstration. Provide a detailed step by step tutorial on how to use it. Dummy data that leads to results is a great way to help your user. Try to avoid an empty state.

**Use screenshots**

   A picture is worth a thousand words.

**Be available for troubleshooting**

   Always assume something can go wrong. Provide a place where users can go with their issues. This can be done on github, gitter, any chat channel or e-mail. 

**Introduce yourself**

   Link to any websites, companies, repositories you are involved with. This can greatly help the user to engage with your plugin and maybe encourage them to assist in development and feedback.

**Always be up to date**

   Be accurate in every detail, update the documentation when your plugin has an update.

UI guidelines
-------------

A great user experience needs a good interface. Here are some requirements for a successfull plugin.

**Clear navigation**

   Really guide your user through all the steps. Provide dummy or mockup data if possible to generate a useful result. There should not be an empty state. Use tooltips or links to the documentation.

**Feedback**

   Every step should have feedback concerning errors, successes or requirements. If a step requires the user to do something in another part of the Remix environment this should be
   clearly indicated. If files are not loading correctly or the Remix IDE returns errors on calls this should be made clear. Your user should never be stuck. Point your user to the results
   generated, tell them what to do if the results fail.

**Dependencies**

   If there are dependencies on other services or software clearly tell the user where to look or what to do. If certain service providers or functionalities in Remix have not been actived your plugin
   should test for them and provide feedback.

**Tooltips and documentation**

   Always refer to any documentation you have on all input fields and steps. Use tooltips whenever possible. Just a form with some input fields is not a good user experience. Don't assume your user knows what to do.




