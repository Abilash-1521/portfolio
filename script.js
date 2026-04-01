/* Prevent scroll restoration */

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
    }
    
    window.addEventListener("load", () => {
    window.scrollTo({
    top:0,
    left:0,
    behavior:"instant"
    });
    });

// ===============================
// Typing Animation
// ===============================

/*const roles = [
    "Salesforce Developer",
    "Apex Automation Engineer",
    "LWC Developer",
    "CRM Systems Builder"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    
    function typeEffect(){
    
    const text = roles[roleIndex];
    
    document.getElementById("typing-text").textContent =
    text.substring(0, charIndex);
    
    charIndex++;
    
    if(charIndex > text.length){
    
    charIndex = 0;
    roleIndex++;
    
    if(roleIndex >= roles.length){
    roleIndex = 0;
    }
    
    }
    
    setTimeout(typeEffect,120);
    }
    
    typeEffect();
    */
    
    // ===============================
    // Skill Popup
    // ===============================
    
    function openSkill(skill){

        let title="";
        let text="";
        let code="";
        
        if(skill==="apex"){
        
        title="Apex Development";
        
        text="Backend business logic development using Apex with bulk-safe processing and scalable trigger frameworks.";
        
        code=`public class OpportunityService {
        
            public static void processOpportunities(List<Opportunity> opps){
        
                List<Task> tasks = new List<Task>();
        
                for(Opportunity opp : opps){
        
                    if(opp.StageName == 'Proposal'){
        
                        tasks.add(new Task(
                            Subject = 'Review Proposal',
                            WhatId = opp.Id
                        ));
        
                    }
        
                }
        
                if(!tasks.isEmpty()){
                    insert tasks;
                }
        
            }
        
        }`;
        }else if(skill==="ncino"){

            title="nCino Workflow Expertise";
            
            text="Experience working on enterprise banking workflows inspired by nCino modules such as Smart Checklist, Treasury Services and loan lifecycle processes.";
            
            code=`Modules Worked:
            - Smart Checklist
            - Treasury Services
            - Loan Lifecycle Flows
            
            Focus Areas:
            - Workflow automation
            - Dynamic routing
            - SLA tracking
            - Metadata-driven design`;
            }
        
        
        else if(skill==="lwc"){
        
        title="Lightning Web Components";
        
        text="Modern Salesforce UI development using Lightning Web Components with reactive properties.";
        
        code=`import { LightningElement, wire } from 'lwc';
        import getAccounts from '@salesforce/apex/AccountController.getAccounts';
        
        export default class AccountList extends LightningElement {
        
            accounts;
        
            @wire(getAccounts)
            wiredAccounts({data,error}){
        
                if(data){
                    this.accounts = data;
                }
        
            }
        
        }`;
        }
        
        
        else if(skill==="triggers"){
        
        title="Trigger Framework";
        
        text="Single-trigger pattern using handler classes to maintain scalable and maintainable automation logic.";
        
        code=`trigger OpportunityTrigger on Opportunity (after update) {
        
            if(Trigger.isAfter && Trigger.isUpdate){
        
                OpportunityHandler.handleAfterUpdate(Trigger.new);
        
            }
        
        }`;
        }
        
        
        else if(skill==="queueable"){
        
        title="Queueable Apex";
        
        text="Asynchronous processing for background tasks and large-scale operations.";
        
        code=`public class DataProcessorQueueable implements Queueable {
        
            public void execute(QueueableContext context){
        
                List<Account> accs =
                [SELECT Id FROM Account LIMIT 100];
        
                // processing logic here
        
            }
        
        }
        
        // enqueue job
        System.enqueueJob(new DataProcessorQueueable());`;
        }
        
        
        else if(skill==="batch"){
        
        title="Batch Apex";
        
        text="Large data processing using batch jobs to avoid governor limits.";
        
        code=`global class SnapshotCleanupBatch 
        implements Database.Batchable<SObject>{
        
            global Database.QueryLocator start(Database.BatchableContext bc){
        
                return Database.getQueryLocator(
                'SELECT Id FROM Snapshot__c WHERE CreatedDate < LAST_N_DAYS:30');
        
            }
        
            global void execute(Database.BatchableContext bc,
                                List<Snapshot__c> scope){
        
                delete scope;
        
            }
        
        }`;
        }
        
        
        else if(skill==="soql"){
        
        title="SOQL Optimization";
        
        text="Efficient data retrieval using selective queries and relationship queries.";
        
        code=`List<Opportunity> opps = [
        
        SELECT Id, Name, StageName,
               Account.Name
        FROM Opportunity
        WHERE StageName = 'Proposal'
        LIMIT 50
        
        ];`;
        }
        
        
        else if(skill==="flow"){
        
        title="Salesforce Flows";
        
        text="Declarative automation for record updates and approval workflows.";
        
        code=`Record Triggered Flow
        
        Object: Opportunity
        Trigger: After Update
        
        Condition:
        StageName = Closed Won
        
        Action:
        Create Follow-up Task`;
        }
        
        
        else if(skill==="rest"){
        
        title="REST API Integration";
        
        text="Integrating Salesforce with external systems using secure API callouts.";
        
        code=`HttpRequest req = new HttpRequest();
        
        req.setEndpoint('callout:External_API/service');
        
        req.setMethod('GET');
        
        Http http = new Http();
        
        HttpResponse res = http.send(req);`;
        }
        
        
        else if(skill==="security"){
        
        title="Security Model";
        
        text="Enforcing CRUD, Field Level Security and sharing rules in Apex.";
        
        code=`if(Schema.sObjectType.Account.isAccessible()){
        
            List<Account> accs =
            [SELECT Id, Name FROM Account];
        
        }`;
        }
        
        
        else if(skill==="git"){
        
        title="Git Based Development";
        
        text="Version control and collaborative development using Git branching strategy.";
        
        code=`git checkout -b feature/checklist-engine
        
        git add .
        
        git commit -m "Added automation logic"
        
        git push origin feature/checklist-engine`;
        }
        
        
        document.getElementById("popupTitle").innerText = title;
        
        document.getElementById("popupText").innerText = text;
        
        document.getElementById("popupCode").innerText = code;
        
        const skillPopup = document.getElementById("skillPopup");

        if(skillPopup){
          skillPopup.style.display = "flex";
        
          // RESET SCROLL
          skillPopup.scrollTop = 0;
        
          const inner = skillPopup.querySelector(".popup-content");
          if(inner){
            inner.scrollTop = 0;
          }
        }
        
        document.body.style.overflow = "hidden";
        
        }
    
        function closePopup(){

           // document.getElementById("skillPopup").style.display = "none";
            //document.body.style.overflow = "auto";
            closeAllPopups();

            }
    
    
    
    // ===============================
    // Recruiter Mode Popup
    // ===============================
    
    function openRecruiterMode(){
    document.getElementById("openEngineeringPopup").style.display = "flex";
    document.body.style.overflow = "hidden";
    }
    
    function closeRecruiter(){

        //document.getElementById("recruiterPopup").style.display = "none";
        //document.body.style.overflow = "auto";
        closeAllPopups();
        }
    
    
    
    // ===============================
    // Apex Architecture Flow Animation
    // ===============================
    
    function animateApexFlow(){

        const nodes=[
        "nodeTrigger",
        "nodeHandler",
        "nodeService",
        "nodeDB"
        ];
        
        let i=0;
        
        function highlight(){
        
        if(i>0){
        document.getElementById(nodes[i-1]).classList.remove("active");
        }
        
        if(i<nodes.length){
        
        document.getElementById(nodes[i]).classList.add("active");
        
        i++;
        
        setTimeout(highlight,800);
        
        }
        
        }
        
        highlight();
        
        }
    
    
    // ===============================
    // Experience Popup
    // ===============================
    
    function openExperience(){

        document.getElementById("detailTitle").innerText =
        "Deloitte Consulting USI — Salesforce Developer (nCino-focused)";
      
        document.getElementById("detailContent").innerHTML = `
      
        <p><b>Environment</b></p>
      
        <ul>
          <li>Salesforce Sales Cloud</li>
          <li>nCino Loan Lifecycle Workflows</li>
          <li>Apex Backend Development</li>
          <li>Record Triggered Flows</li>
          <li>Git Based Development</li>
        </ul>
      
      
        <p><b>Domain & System Context</b></p>
      
        <p class="case-sub">
        Worked on enterprise banking workflows inspired by nCino modules such as 
        Smart Checklist and Treasury Services, re-engineering similar systems 
        using Salesforce-native architecture.
        </p>
      
      
        <p><b>Key Engineering Problems Solved</b></p>
      
        <ul>
          <li>Manual checklist creation across opportunity lifecycle</li>
          <li>Manual backend provisioning of treasury services</li>
          <li>High-volume snapshot data degrading system performance</li>
        </ul>
      
      
        <p><b>Solutions Designed</b></p>
      
        <ul>
          <li>Built a Smart Checklist-like automation engine using Apex trigger framework</li>
          <li>Designed Opportunity → Service Cascade system for backend provisioning</li>
          <li>Implemented Batch Apex cleanup framework for data maintenance</li>
        </ul>
      
      
        <p><b>Architecture Approach</b></p>
      
        <ul>
          <li>Trigger → Handler → Service layered architecture</li>
          <li>Bulk-safe collections for high-volume processing</li>
          <li>Queueable & Batch Apex for async pipelines</li>
          <li>SOQL optimization & governor-limit safe design</li>
          <li>Secure Apex with CRUD & FLS enforcement</li>
        </ul>
      
      
        <p><b>Engineering Impact</b></p>
      
        <ul>
          <li>Reduced manual operational effort by ~40%</li>
          <li>Improved deal onboarding and processing efficiency</li>
          <li>Automated backend system configuration</li>
          <li>Improved org performance through scheduled cleanup</li>
        </ul>
      
        `;
      
        const popup = document.getElementById("detailPopup");
      
        if(popup){
          popup.style.display = "flex";
      
          // reset scroll
          popup.scrollTop = 0;
      
          const inner = popup.querySelector(".popup-content");
          if(inner){
            inner.scrollTop = 0;
          }
        }
      
        document.body.style.overflow = "hidden";
      }
        function openCareerBreak(){

            document.getElementById("detailTitle").innerText =
            "Career Break & Skill Development";
            
            document.getElementById("detailContent").innerHTML = `
            
            <p><b>Period</b></p>
            
            <p>Feb 2025 – Present</p>
            
           <p><b>Focus During This Period</b></p>

<p>
Used this period to upgrade my Salesforce development capabilities 
and expand into modern platform technologies including Lightning 
Web Components and Salesforce integrations while building 
independent automation projects.
</p>
            <p><b>Skills Covered During This Period</b></p>
            
            <ul>
            
            <li>Salesforce Administration Fundamentals</li>
            
            <li>Apex Development Refresher</li>
            
            <li>Lightning Web Components (LWC) Basics</li>
            
            <li>Salesforce Integrations (REST API)</li>
            
            <li>Modern Salesforce Development Patterns</li>
            
            </ul>
            
            <p>
            Currently exploring new opportunities and ready to join immediately.
            </p>
            
            `;
            
            document.getElementById("detailPopup").style.display="flex";
            
            document.body.style.overflow="hidden";
            
            }
    
    // ===============================
    // Project Popups
    // ===============================
    
   /* function openProject(type){

        let title="";
        let content="";
        
        if(type==="checklist"){
        
        title="Dynamic Checklist & Task Automation Engine";
        
        content = `

        <p><b>Overview</b></p>
        
        <p>
        A configurable automation engine that dynamically generates operational
        checklists and tasks during the Opportunity lifecycle based on product
        configurations and business templates.
        </p>
        
        <p>
        The system uses a template-driven architecture where checklist templates
        and task templates define operational workflows. This allows administrators
        to configure new processes without modifying Apex code.
        </p>
        
        
        <p><b>Architecture</b></p>
        
        <div class="architecture-board">
        
        <div class="arch-box">Opportunity</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Product Selected</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Opportunity Conversion</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Checklist Engine</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Checklist Template</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Tasks Generated</div>
        
        </div>
        <div class="project-flow">

<div>Trigger</div>
<span>→</span>
<div>Handler</div>
<span>→</span>
<div>Service</div>
<span>→</span>
<div>Queueable</div>
<span>→</span>
<div>Database</div>

</div>
        
        
        
        <p><b>What the System Does</b></p>
        
        <ul>
        
        <li>Detects products selected on an Opportunity</li>
        
        <li>Creates Product Package and Treasury Service records</li>
        
        <li>Generates operational checklists from configurable templates</li>
        
        <li>Creates tasks automatically using task templates</li>
        
        <li>Synchronizes progress across Opportunity, Product Package and Treasury Service</li>
        
        <li>Updates stages automatically as tasks are completed</li>
        
        </ul>
        
        
        <p><b>Technology Used</b></p>
        
        <ul>
        
        <li>Apex Trigger Framework</li>
        <li>Salesforce Flows</li>
        <li>Lightning Web Components (LWC)</li>
        <li>SOQL Queries</li>
        <li>Custom Objects</li>
        
        </ul>
        
        
        <p><b>Engineering Outcome</b></p>
        
        <p>
        This engine standardizes operational workflows such as treasury onboarding
        and product activation, eliminating manual checklist creation while ensuring
        consistent process execution across teams.
        </p>
        <p><b>Why this design?</b></p>
<ul>
<li>Needed scalable reusable templates</li>
<li>Avoid hardcoding workflows</li>
<li>Support future extensibility</li>
</ul>
        <p>
👉 Detailed breakdown available in <b>Case Study section</b>
</p>
        
        <p style="margin-top:20px">
        
        <a href="https://github.com/Abilash-1521/salesforce-dynamic-checklist-engine"
        target="_blank">
        
        View Code → GitHub Repository
        
        </a>
        
        </p>
        
        `;
        
        }
        
        
        else if(type==="cascade"){
        
        title="Opportunity → Treasury Service Cascade Automation";
        
        content = `

<p><b>Overview</b></p>

<p>
Automation system that provisions backend treasury operational records 
based on Opportunity products when deals progress through the sales lifecycle.
</p>

<p>
When an Opportunity reaches a key stage such as <b>Closed Won</b>, the system
evaluates products associated with the Opportunity and automatically creates
operational records required for treasury service provisioning.
</p>


<p><b>Architecture</b></p>

<div class="architecture-board">

<div class="arch-box">Opportunity Stage Update</div>
<div class="arch-arrow"></div>

<div class="arch-box">Trigger Framework</div>
<div class="arch-arrow"></div>

<div class="arch-box">Service Layer</div>
<div class="arch-arrow"></div>

<div class="arch-box">Opportunity Products</div>
<div class="arch-arrow"></div>

<div class="arch-box">Product Package</div>
<div class="arch-arrow"></div>

<div class="arch-box">Treasury Service</div>

</div>
<div class="project-flow">

<div>Trigger</div>
<span>→</span>
<div>Handler</div>
<span>→</span>
<div>Service</div>
<span>→</span>
<div>Queueable</div>
<span>→</span>
<div>Database</div>

</div>


<p><b>What the System Does</b></p>

<ul>

<li>Detects Opportunity stage updates</li>

<li>Queries Opportunity Products (OpportunityLineItem)</li>

<li>Creates Product Package records for each product</li>

<li>Creates Treasury Service records linked to the Opportunity</li>

<li>Automates backend operational provisioning</li>

</ul>


<p><b>Technology Used</b></p>

<ul>

<li>Apex Trigger Framework</li>
<li>SOQL Relationship Queries</li>
<li>Service Layer Architecture</li>
<li>Bulk-safe Processing Collections</li>
<li>Custom Objects</li>

</ul>


<p><b>Engineering Outcome</b></p>

<p>
This automation eliminates manual configuration of treasury services during
deal processing and ensures operational readiness immediately after a deal
is closed.
</p>


<p style="margin-top:20px">

<a href="https://github.com/Abilash-1521/salesforce-opportunity-product-cascade-automation"
target="_blank">

View Code → GitHub Repository

</a>

</p>

`;
        
        }
        
        
        else if(type==="snapshot"){
        
            title="Snapshot Bulk Cleanup System";

            content=`
            
            <p><b>Overview</b></p>
            
            <p>
            Automated maintenance system that deletes historical Opportunity snapshot
            records older than 30 days using Scheduled Apex and Batch Apex.
            </p>
            
            <p>
            The cleanup job runs every Friday evening and removes outdated snapshot
            data to prevent unnecessary storage growth and maintain Salesforce
            org performance.
            </p>
            
            
            <p><b>Architecture</b></p>
            
            <div class="architecture-board">
            
            <div class="arch-box">Scheduled Apex</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">Batch Apex Job</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">SOQL Query</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">Snapshot Records</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">Bulk Delete</div>
            
            </div>
            <div class="project-flow">

<div>Trigger</div>
<span>→</span>
<div>Handler</div>
<span>→</span>
<div>Service</div>
<span>→</span>
<div>Queueable</div>
<span>→</span>
<div>Database</div>

</div>
            
            
            <p><b>Technology Used</b></p>
            
            <ul>
            
            <li>Batch Apex</li>
            <li>Scheduled Apex</li>
            <li>SOQL Queries</li>
            <li>Bulk Processing Collections</li>
            
            </ul>
            
            
            <p><b>Engineering Outcome</b></p>
            
            <p>
            Automated snapshot cleanup reduced unnecessary data growth and ensured
            consistent Salesforce org performance without manual maintenance.
            </p>
            
            
            <p style="margin-top:20px">
            
            <a href="https://github.com/Abilash-1521/salesforce-snapshot-cleanup-system"
            target="_blank">
            
            View Code → GitHub Repository
            
            </a>
            
            </p>
            
            `;
        
        }
        else if(type==="account"){

            title="Account Schematic Filtering Engine";
            
            content=`
            
            <p><b>Overview</b></p>
            
            <p>
            Designed a dynamic multi-level filtering system to manage complex financial relationships 
            across Accounts, Deposits, Treasury Services, and Products.
            </p>
            
            <p><b>Architecture</b></p>
            
            <div class="architecture-board">
            
            <div class="arch-box">Account</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">Deposit</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">Deposit Status</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">Treasury Service</div>
            <div class="arch-arrow"></div>
            
            <div class="arch-box">Product</div>
            
            </div>
            
            <div class="project-flow">
            
            <div>Aura UI</div>
            <span>→</span>
            <div>Helper JS</div>
            <span>→</span>
            <div>Apex Controller</div>
            <span>→</span>
            <div>SOQL</div>
            
            </div>
            
            <p><b>What the System Does</b></p>
            
            <ul>
            
            <li>Loads Account → Deposit → Treasury hierarchy dynamically</li>
            
            <li>Applies multi-level filters across all related objects</li>
            
            <li>Maintains synchronized filtering across UI components</li>
            
            <li>Handles partial selections and "select all" scenarios</li>
            
            <li>Supports real-time data refresh using Apex calls</li>
            
            </ul>
            
            <p><b>Core Engineering Logic</b></p>
            
            <ul>
            
            <li>Custom selection engine using selected + duplicate + all IDs logic</li>
            
            <li>Dynamic SOQL queries based on filters</li>
            
            <li>Reusable filtering methods across layers</li>
            
            <li>Bulk-safe processing of records</li>
            
            </ul>
            
            <p><b>Key Engineering Decisions</b></p>
            
            <ul>
            
            <li>Avoided static filtering → built dynamic filter engine</li>
            
            <li>Used duplicate tracking to handle UI state consistency</li>
            
            <li>Separated UI, logic, and data layers</li>
            
            </ul>
            
            <p><b>Engineering Outcome</b></p>
            
            <p>
            Enabled scalable and efficient filtering across complex financial datasets, 
            improving usability and reducing manual data navigation.
            </p>
            <p><b>Special Highlight:</b> Implemented full reset mechanism to clear all filters and reload system state.</p>
            
            `;
            }
        
        
        document.getElementById("detailTitle").innerText = title;
        document.getElementById("detailContent").innerHTML = content;
        
        document.getElementById("detailPopup").style.display="flex";
        document.body.style.overflow="hidden";
        
        }
 */
// ===============================
// OPEN PROJECT
// ===============================

function openProject(type){

      // reset tabs
    switchTab('overview');
    
    // CHECKLIST
    if(type==="checklist"){
    
    document.getElementById("popup-title").innerText =
    "Checklist Automation Engine";
    
    document.getElementById("tab-overview").innerHTML = `
<p class="case-sub">
Inspired by nCino Smart Checklist concept, this system automates checklist generation based on lifecycle stages and business conditions.
</p>
<div class="case-block">

<p class="case-title">Problem</p>
<p>
During the opportunity lifecycle, checklist creation was handled manually, 
which led to delays, inconsistent execution, and lack of visibility across teams.
</p>

<p class="case-sub">
This created heavy dependency on manual tracking and increased the risk of missing critical onboarding steps.
</p>


</div>


<div class="case-block">

<p class="case-title">Solution</p>
<p>
Designed and implemented a <b style="color:#38bdf8;">scalable checklist automation engine</b> 
using Apex trigger framework and template-driven architecture.
</p>

<ul class="bullet-list">
<li>Automatically generates checklists based on selected products</li>
<li>Creates dependent tasks using configurable templates</li>
<li>Tracks execution across lifecycle stages</li>
</ul>

<ul class="arrow-list">
<li>Eliminates manual checklist dependency</li>
<li>Ensures standardized execution across teams</li>
<li>Improves operational visibility and control</li>
</ul>

</div>


<div class="case-block">

<p class="case-title">How it Works</p>

<div class="case-flow">
<span>Opportunity Update</span>
<span>→</span>
<span>Trigger</span>
<span>→</span>
<span>Handler</span>
<span>→</span>
<span>Service</span>
<span>→</span>
<span>Checklist Engine</span>
</div>

<p class="case-sub">
Each stage transition triggers backend logic that dynamically provisions checklist 
and task structures without manual intervention.
</p>

</div>


<div class="case-block">

<p class="case-title">Tech Used</p>

<div class="tech-tags">
<span>Apex</span>
<span>Trigger Framework</span>
<span>SOQL</span>
<span>nCino</span>
</div>

</div>


<div class="case-block">

<p class="case-title">Impact</p>

<ul class="arrow-list">
<li>Reduced manual effort by ~40%</li>
<li>Standardized workflow execution across lifecycle</li>
<li>Improved onboarding efficiency and tracking</li>
</ul>

<p class="case-highlight">
→ Built using real project experience in Salesforce + nCino ecosystem
</p>

</div>

<br>

<a href="https://github.com/abilash-1521/salesforce-dynamic-checklist-engine"
target="_blank"
class="github-popup-link">
View Full Code on GitHub →
</a>

`;
    }
    
    // CASCADE
    else if(type==="cascade"){
    
    document.getElementById("popup-title").innerText =
    "Treasury Cascade Automation";
    
    document.getElementById("tab-overview").innerHTML = `
    <p class="case-sub">
This design mirrors nCino-style service provisioning, where backend systems are dynamically created during deal lifecycle transitions.
</p>

    <div class="case-block">
    
    <p class="case-title">Problem</p>
    <p>
    After deal closure, treasury service setup was handled manually which caused delays 
    in backend provisioning and dependency on operations teams.
    </p>
    
    <p class="case-sub">
    This slowed down deal onboarding and created inconsistency in system readiness.
    </p>
    
    </div>
    
    <div class="case-block">
    
    <p class="case-title">Solution</p>
    <p>
    Designed an <b style="color:#38bdf8;">automated cascade system</b> using Apex trigger 
    and Queueable processing to provision backend records dynamically.
    </p>
    
    <ul class="bullet-list">
    <li>Detects opportunity stage changes (Closed Won)</li>
    <li>Fetches related Opportunity Products</li>
    <li>Creates Product Package & Treasury Service records</li>
    </ul>
    
    <ul class="arrow-list">
    <li>Eliminates manual backend configuration</li>
    <li>Ensures immediate system readiness</li>
    <li>Improves deal processing speed</li>
    </ul>
    
    </div>
    
    <div class="case-block">
    
    <p class="case-title">How it Works</p>
    
    <div class="case-flow">
    <span>Opportunity Update</span>
    <span>→</span>
    <span>Trigger</span>
    <span>→</span>
    <span>Service Layer</span>
    <span>→</span>
    <span>Queueable</span>
    <span>→</span>
    <span>Record Creation</span>
    </div>
    
    <p class="case-sub">
    Async processing ensures scalability and prevents governor limit issues.
    </p>
    
    </div>
    
    <div class="case-block">
    
    <p class="case-title">Tech Used</p>
    
    <div class="tech-tags">
    <span>Apex</span>
    <span>Queueable</span>
    <span>SOQL</span>
    <span>nCino</span>
    </div>
    
    </div>
    
    <div class="case-block">
    
    <p class="case-title">Impact</p>
    
    <ul class="arrow-list">
    <li>Removed manual provisioning effort</li>
    <li>Improved onboarding speed</li>
    <li>Ensured consistent backend setup</li>
    </ul>
    
    <p class="case-highlight">
    → Built using real-time enterprise automation requirements
    </p>
    
    </div>
    
    <br>
    
    <a href="https://github.com/abilash-1521/salesforce-opportunity-product-cascade-automation"
    target="_blank"
    class="github-popup-link">
    View Full Code on GitHub →
    </a>
    
    `;
    
    document.getElementById("tab-architecture").innerHTML = `
    <div class="project-flow">
    <div>Opportunity</div><span>→</span>
    <div>Trigger</div><span>→</span>
    <div>Service</div><span>→</span>
    <div>Queueable</div>
    </div>
    `;
    
    document.getElementById("tab-decisions").innerHTML = `
    <ul>
    <li>Used async to avoid limits</li>
    <li>Ensured scalable processing</li>
    </ul>
    `;
    
    }
    
    // SNAPSHOT
    else if(type==="snapshot"){
    
    document.getElementById("popup-title").innerText =
    "Snapshot Cleanup Engine";
    
    document.getElementById("tab-overview").innerHTML = `
    <p class="case-sub">
Designed for enterprise-scale Salesforce environments handling high data volumes.
</p>

<div class="case-block">

<p class="case-title">Problem</p>
<p>
Snapshot data accumulated rapidly over time, impacting Salesforce storage 
and degrading system performance.
</p>

<p class="case-sub">
Manual cleanup was not feasible due to large data volumes.
</p>

</div>

<div class="case-block">

<p class="case-title">Solution</p>
<p>
Built a <b style="color:#38bdf8;">scheduled cleanup framework</b> using Batch Apex 
and Scheduler to automate deletion of old snapshot records.
</p>

<ul class="bullet-list">
<li>Identifies records older than defined threshold</li>
<li>Processes large datasets using Batch Apex</li>
<li>Schedules periodic cleanup automatically</li>
</ul>

<ul class="arrow-list">
<li>Prevents unnecessary data growth</li>
<li>Maintains system performance</li>
<li>Eliminates manual maintenance</li>
</ul>

</div>

<div class="case-block">

<p class="case-title">How it Works</p>

<div class="case-flow">
<span>Scheduler</span>
<span>→</span>
<span>Batch Apex</span>
<span>→</span>
<span>SOQL Query</span>
<span>→</span>
<span>Bulk Delete</span>
</div>

<p class="case-sub">
Batch processing ensures safe execution without hitting governor limits.
</p>

</div>

<div class="case-block">

<p class="case-title">Tech Used</p>

<div class="tech-tags">
<span>Batch Apex</span>
<span>Scheduler</span>
<span>SOQL</span>
</div>

</div>

<div class="case-block">

<p class="case-title">Impact</p>

<ul class="arrow-list">
<li>Improved org performance</li>
<li>Reduced storage consumption</li>
<li>Ensured automated maintenance</li>
</ul>

<p class="case-highlight">
→ Designed for high-volume data handling scenarios
</p>

</div>

<br>

<a href="https://github.com/abilash-1521/salesforce-snapshot-cleanup-system"
target="_blank"
class="github-popup-link">
View Full Code on GitHub →
</a>

`;
    
    document.getElementById("tab-architecture").innerHTML = `
    <div class="project-flow">
    <div>Scheduler</div><span>→</span>
    <div>Batch Apex</div><span>→</span>
    <div>Database</div>
    </div>
    `;
    
    document.getElementById("tab-decisions").innerHTML = `
    <ul>
    <li>Used batch for large data</li>
    <li>Improved system performance</li>
    </ul>
    `;
    
    }
    
    // ACCOUNT SCHEMATIC
    else if(type==="account"){
    
    document.getElementById("popup-title").innerText =
    "Account Schematic Engine";
    
    document.getElementById("tab-overview").innerHTML = `
    <p class="case-sub">
Inspired by complex banking relationship structures similar to nCino account-product mappings.
</p>

<div class="case-block">

<p class="case-title">Problem</p>
<p>
Managing complex relationships between accounts, deposits, and treasury services 
was difficult due to lack of dynamic filtering.
</p>

<p class="case-sub">
Users struggled with navigating large datasets and applying consistent filters.
</p>

</div>

<div class="case-block">

<p class="case-title">Solution</p>
<p>
Built a <b style="color:#38bdf8;">dynamic filtering engine</b> using Aura UI 
and Apex controllers to handle multi-level relationships.
</p>

<ul class="bullet-list">
<li>Loads hierarchical account → deposit → treasury data</li>
<li>Applies filters dynamically across related objects</li>
<li>Maintains UI state consistency</li>
</ul>

<ul class="arrow-list">
<li>Improves usability across complex datasets</li>
<li>Reduces manual data navigation</li>
<li>Ensures real-time synchronization</li>
</ul>

</div>

<div class="case-block">

<p class="case-title">How it Works</p>

<div class="case-flow">
<span>Aura UI</span>
<span>→</span>
<span>Helper JS</span>
<span>→</span>
<span>Apex Controller</span>
<span>→</span>
<span>SOQL</span>
</div>

<p class="case-sub">
Dynamic queries ensure efficient data retrieval based on user selections.
</p>

</div>

<div class="case-block">

<p class="case-title">Tech Used</p>

<div class="tech-tags">
<span>Aura</span>
<span>Apex</span>
<span>SOQL</span>
</div>

</div>

<div class="case-block">

<p class="case-title">Impact</p>

<ul class="arrow-list">
<li>Improved data visibility</li>
<li>Reduced user effort in filtering</li>
<li>Enhanced UI responsiveness</li>
</ul>

<p class="case-highlight">
→ Built for complex enterprise data navigation use cases
</p>

</div>

<br>

<a href="https://github.com/Abilash-1521/salesforce-account-schematic-engine"
target="_blank"
class="github-popup-link">
View Full Code on GitHub →
</a>

`;
    
    document.getElementById("tab-architecture").innerHTML = `
    <div class="project-flow">
    <div>Account</div><span>→</span>
    <div>Deposit</div><span>→</span>
    <div>Treasury</div><span>→</span>
    <div>Product</div>
    </div>
    `;
    
    document.getElementById("tab-decisions").innerHTML = `
    <ul>
    <li>Custom selection logic (selected + duplicate)</li>
    <li>Dynamic SOQL queries</li>
    <li>State consistency handling</li>
    </ul>
    `;
    
    }
    
    // SHOW POPUP
  //  document.getElementById("popup").style.display = "flex";
    
    
// ===============================
// SHOW POPUP (CLEAN FIX)
// ===============================

// LOCK SCROLL
document.body.style.overflow = "hidden";

// USE ONLY ONE POPUP (detailPopup)
const projectPopup = document.getElementById("popup");

if(projectPopup){

  projectPopup.style.display = "flex";

  // RESET SCROLL TO TOP
  projectPopup.scrollTop = 0;

  const inner = projectPopup.querySelector(".popup-content");
  if(inner){
    inner.scrollTop = 0;
  }

  // animation trigger
  setTimeout(()=>{
    projectPopup.classList.add("show");
  },10);
}}
    
    // ===============================
    // CLOSE POPUP
    // ===============================
    
  /*  function closePopup(){
        const popup = document.getElementById("popup");

        popup.classList.remove("show");
        
        setTimeout(()=>{
        popup.style.display = "none";
        },200);
        }
    */
    
    // ===============================
    // TAB SWITCH
    // ===============================
    
    function switchTab(tab){
    
    document.querySelectorAll('.tab').forEach(btn=>{
    btn.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-content').forEach(content=>{
    content.classList.remove('active');
    });
    
    document.querySelector(`[onclick="switchTab('${tab}')"]`)
    .classList.add('active');
    
    document.getElementById(`tab-${tab}`)
    .classList.add('active');
    }
    
    
    // ===============================
    // CLOSE ON OUTSIDE CLICK
    // ===============================
    
    window.onclick = function(e){
    let popup = document.getElementById("popup");
    if(e.target === popup){
    popup.style.display = "none";
    }
    };

    
    
    // ===============================
    // Architecture Explanation
    // ===============================
    
  /*  function showArch(type){
    
    let text="";
    
    if(type==="trigger"){
    text="Trigger listens to object events and delegates logic to handler classes.";
    }
    
    else if(type==="handler"){
    text="Handler class manages business logic and keeps triggers lightweight.";
    }
    
    else if(type==="service"){
    text="Service layer contains reusable business logic and integrations.";
    }
    
    else if(type==="db"){
    text="Database layer performs bulk-safe DML operations.";
    }
    
    alert(text);
    
    }
    
    */
    
    // ===============================
    // Salesforce System Design Playground
    // ===============================
    
    function runSimulation(){

        const nodes=[
        "node1",
        "node2",
        "node3",
        "node4",
        "node5"
        ];
        
        const lines=document.querySelectorAll(".flow-line");
        
        let i=0;
        
        function highlight(){
        
        /* remove previous highlight */
        
        if(i>0){
        document.getElementById(nodes[i-1]).classList.remove("active");
        }
        
        /* highlight current node */
        
        if(i<nodes.length){
        
        document.getElementById(nodes[i]).classList.add("active");
        
        /* animate data flow */
        
        if(lines[i]){
        const dot=document.createElement("div");
        dot.classList.add("data-dot");
        lines[i].appendChild(dot);
        
        setTimeout(()=>{
        dot.remove();
        },2000);
        }
        
        i++;
        
        setTimeout(highlight,800);
        
        }
        
        }
        
        highlight();
        
        }

        // ===============================
// Salesforce Transaction Simulator
// ===============================

function runTransaction(){

    const nodes=[
    "sim1",
    "sim2",
    "sim3",
    "sim4",
    "sim5",
    "sim6"
    ];
    
    let i=0;
    
    function highlight(){
    
    if(i>0){
    document.getElementById(nodes[i-1]).classList.remove("active");
    }
    
    if(i<nodes.length){
    
    document.getElementById(nodes[i]).classList.add("active");
    
    i++;
    
    setTimeout(highlight,900);
    
    }
    
    }
    
    highlight();
    
    }
    document.querySelectorAll("nav a").forEach(anchor => {

        anchor.addEventListener("click", function(e){
        
        e.preventDefault();
        
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
        behavior:"smooth"
        });
        
        });
        
        });
        /* SCROLL REVEAL */

        function revealSections(){

            const sections=document.querySelectorAll(".reveal");
            
            sections.forEach(section=>{
            
            const windowHeight=window.innerHeight;
            const revealTop=section.getBoundingClientRect().top;
            
            if(revealTop < windowHeight - 120){
            
            section.classList.add("active");
            
            }
            
            });
            
            }
            
            window.addEventListener("scroll",revealSections);

    /* PARTICLE BACKGROUND */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<60;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2+1,

dx:(Math.random()-0.5)*0.5,

dy:(Math.random()-0.5)*0.5

});

}

function drawParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(56,189,248,0.5)";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width) p.dx*=-1;
if(p.y<0||p.y>canvas.height) p.dy*=-1;

});

requestAnimationFrame(drawParticles);

}

drawParticles();
window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});
function sendDataDot(line){

    const dot=document.createElement("div");
    dot.className="data-dot";
    
    line.appendChild(dot);
    
    setTimeout(()=>dot.remove(),2000);
    
    }
   /* window.onclick = function(event){

        const popups = document.querySelectorAll(".popup");
        
        popups.forEach(popup =>{
        
        if(event.target === popup){
        popup.style.display="none";
        document.body.style.overflow="auto";
        }
        
        });
        
        };*/
        document.addEventListener("keydown", function(e){

            if(e.key === "Escape"){
           /* document.getElementById("detailPopup").style.display = "none";
            document.getElementById("skillPopup").style.display = "none";
            document.getElementById("recruiterPopup").style.display = "none";*/
            closeAllPopups();
            }
            
            });
            function closeAllPopups(){

                document.querySelectorAll(".popup").forEach(p => {
                    p.style.display = "none";
                });
            
                // 🔥 THIS WAS MISSING
                document.body.style.overflow = "auto";
            }

            function closeDetail(){
               // document.getElementById("detailPopup").style.display="none";
                //document.body.style.overflow="auto";
                closeAllPopups();
            }
                function copyEmail(){

                    const email =
                    document.getElementById("emailText").innerText;
                    
                    navigator.clipboard.writeText(email);
                    
                    alert("Email copied to clipboard");
                    
                    }
                    /* NAVBAR ACTIVE SECTION */

                    const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionBottom
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }

  });

});
window.addEventListener("scroll", () => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
    
    document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    });
    
    document.querySelector('nav a[href="#contact"]').classList.add("active");
    
    }
    
    });
function toggleMenu(){

    const menu =
    document.querySelector("nav ul");
    
    menu.classList.toggle("active");
    
    }
    function scrollToRecruiter(){

        const section = document.getElementById("recruiter");
        
        section.scrollIntoView({
        behavior:"smooth"
        });
        
        setTimeout(()=>{
        
        if(!skillsAnimated){
        animateSkills();
        skillsAnimated = true;
        }
        
        },500);
        
        }
        function showLayer(layer){

            let title="";
            let content="";
            
            if(layer==="trigger"){
            
            title="Trigger Layer";
            
            content=`
            <p>Triggers act as entry points for Salesforce transactions.</p>
            
            <ul>
            <li>Listens to object events (insert, update, delete)</li>
            <li>Keeps trigger lightweight</li>
            <li>Delegates logic to handler classes</li>
            <li>Supports bulk-safe processing</li>
            </ul>
            
            <pre>
            trigger OpportunityTrigger
            on Opportunity (after update){
            
            OpportunityHandler.handleAfterUpdate(
            Trigger.new
            );
            
            }
            </pre>
            `;
            
            }
            
            else if(layer==="handler"){
            
            title="Handler Layer";
            
            content=`
            <p>Handler classes organize trigger logic into maintainable modules.</p>
            
            <ul>
            <li>Separates business logic from trigger</li>
            <li>Improves readability</li>
            <li>Supports testing and scalability</li>
            </ul>
            
            <pre>
            public class OpportunityHandler{
            
            public static void handleAfterUpdate(
            List<Opportunity> opps){
            
            OpportunityService.process(opps);
            
            }
            
            }
            </pre>
            `;
            
            }
            
            else if(layer==="service"){
            
            title="Service Layer";
            
            content=`
            <p>The service layer contains reusable business logic.</p>
            
            <ul>
            <li>Reusable across triggers</li>
            <li>Handles automation logic</li>
            <li>Supports integrations</li>
            </ul>
            
            <pre>
            public class OpportunityService{
            
            public static void process(
            List<Opportunity> opps){
            
            // business logic here
            
            }
            
            }
            </pre>
            `;
            
            }
            
            else if(layer==="database"){
            
            title="Database Layer";
            
            content=`
            <p>This layer performs bulk-safe database operations.</p>
            
            <ul>
            <li>Bulk-safe DML</li>
            <li>SOQL optimization</li>
            <li>Governor-limit safe</li>
            </ul>
            
            <pre>
            List<Task> tasks = new List<Task>();
            
            insert tasks;
            </pre>
            `;
            
            }
            
            document.getElementById("detailTitle").innerText=title;
            
            document.getElementById("detailContent").innerHTML=content;
            
            document.getElementById("detailPopup").style.display="flex";
            
            }
            
                /* =========================
SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.2});

reveals.forEach(section=>{
observer.observe(section);
});


/* =========================
SKILL BAR ANIMATION
========================= */

const skillBars = document.querySelectorAll(".skill-fill");

let skillsAnimated = false;

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !skillsAnimated){

animateSkills();
skillsAnimated = true;

}

});

},{threshold:0.5});

skillBars.forEach(bar=>{
skillObserver.observe(bar);
});
/* =========================
ARCHITECTURE FLOW ANIMATION
========================= */

function showLayer(layer){

    const nodes=document.querySelectorAll(".arch-layer");
    
    nodes.forEach(n=>n.classList.remove("active"));
    
    if(layer==="trigger")
    nodes[0].classList.add("active");
    
    if(layer==="handler")
    nodes[1].classList.add("active");
    
    if(layer==="service")
    nodes[2].classList.add("active");
    
    if(layer==="database")
    nodes[3].classList.add("active");
    
    }
    /* =========================
DATA FLOW VISUALIZATION
========================= */

function animateDataFlow(){

    const lines=document.querySelectorAll(".flow-line");
    
    lines.forEach(line=>{
    
    const dot=document.createElement("div");
    
    dot.classList.add("data-dot");
    
    line.appendChild(dot);
    
    /* remove old dots after animation */
    
    setTimeout(()=>{
    dot.remove();
    },2000);
    
    });
    
    }
    
    /* =========================
NAVBAR SCROLL SPY
========================= */

/*const pageSections = document.querySelectorAll("section");
const navMenuLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let currentSection = "";

pageSections.forEach(section => {

const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
currentSection = section.getAttribute("id");
}

});

navMenuLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + currentSection){
link.classList.add("active");
}

});

});*/
function animateSkills(){

    const skills = [
    {cls:"apex",val:90},
    {cls:"async",val:85},
    {cls:"automation",val:88},
    {cls:"integration",val:40},
    {cls:"performance",val:82},
    {cls:"devops",val:70}
    ];
    
    skills.forEach(skill=>{
    
    const bar=document.querySelector("."+skill.cls);
    const percent=bar.querySelector(".skill-percent");
    
    bar.style.width=skill.val+"%";
    
    let current=0;
    
    const counter=setInterval(()=>{
    
    if(current>=skill.val){
    
    clearInterval(counter);
    
    }else{
    
    current++;
    percent.innerText=current+"%";
    
    }
    
    },20);
    
    });
    
    }
  //  setTimeout(animateSkills,800);
    window.onclick = function(event){

        const popups = document.querySelectorAll(".popup");
        
        popups.forEach(popup =>{
        
        if(event.target === popup){
        popup.style.display="none";
        document.body.style.overflow="auto";
        }
        
        });
        
        };
        window.addEventListener("scroll",()=>{

            const scrolled=window.scrollY;
            
            document.getElementById("particles").style.transform=
            `translateY(${scrolled*0.15}px)`;
            
            });
            const hero = document.querySelector(".hero");
const heroName = document.querySelector(".hero-name");

window.addEventListener("scroll", () => {

const scrollY = window.scrollY;

if(scrollY < 300){

const scale = 1 - scrollY * 0.0007;
const opacity = 1 - scrollY * 0.002;

heroName.style.transform = `scale(${scale})`;
heroName.style.opacity = opacity;

hero.style.transform = `translateY(${scrollY * 0.2}px)`;

}

});
function animateStats(){

    const stats=document.querySelectorAll(".stat h3");
    
    stats.forEach(stat=>{
    
    const target=stat.innerText;
    
    if(target.includes("%")){
    
    let num=0;
    const final=parseInt(target);
    
    const counter=setInterval(()=>{
    
    if(num>=final){
    
    clearInterval(counter);
    
    }else{
    
    num++;
    stat.innerText=num+"%";
    
    }
    
    },25);
    
    }
    
    });
    
    }
    
function trackResumeDownload(){

if(typeof gtag === "function"){

gtag('event','resume_download',{
event_category:'engagement',
event_label:'resume'
});

}

console.log("Resume downloaded");

incrementResumeCounter();

}

let scroll50Tracked = false;
let scroll80Tracked = false;

window.addEventListener("scroll", () => {

let scrollPercent =
(window.scrollY + window.innerHeight) / document.body.scrollHeight;

if(scrollPercent > 0.5 && !scroll50Tracked){
scroll50Tracked = true;
gtag('event','scroll_50',{event_category:'engagement'});
}

if(scrollPercent > 0.8 && !scroll80Tracked){
scroll80Tracked = true;
gtag('event','scroll_80',{event_category:'engagement'});
}

});
// Highlight sticky CTA after 3 sec
setTimeout(()=>{
    const cta = document.querySelector(".sticky-cta");
    if(cta){
    cta.style.boxShadow = "0 0 20px rgba(56,189,248,0.6)";
    }
    },3000);
    window.addEventListener("load", () => {
        setTimeout(()=>{
        document.querySelectorAll(".reveal").forEach(el=>{
        el.classList.add("active");
        });
        },300);
        });
        // ===============================
// SCROLL DEPTH TRACKING (ANALYTICS BOOST)
// ===============================

let scroll50 = false;
let scroll80 = false;

window.addEventListener("scroll", () => {

let scrollPercent =
(window.scrollY + window.innerHeight) / document.body.scrollHeight;

if(scrollPercent > 0.5 && !scroll50){
scroll50 = true;
gtag('event','scroll_50',{event_category:'engagement'});
}

if(scrollPercent > 0.8 && !scroll80){
scroll80 = true;
gtag('event','scroll_80',{event_category:'engagement'});
}

});
event.stopPropagation()


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  function scrollToSection(id){
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  function openEngineeringPopup(){

    const popup = document.getElementById("engineeringPopup");
  
    if(popup){
      popup.style.display = "flex";
  
      popup.scrollTop = 0;
  
      const inner = popup.querySelector(".popup-content");
      if(inner){
        inner.scrollTop = 0;
      }
    }
  
    document.body.style.overflow = "hidden";
  }
 
