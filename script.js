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
        
        document.getElementById("skillPopup").style.display="flex";
        document.body.style.overflow = "hidden";
        
        }
    
        function closePopup(){

            document.getElementById("skillPopup").style.display = "none";
            document.body.style.overflow = "auto";
            
            }
    
    
    
    // ===============================
    // Recruiter Mode Popup
    // ===============================
    
    function openRecruiterMode(){
    document.getElementById("recruiterPopup").style.display = "flex";
    document.body.style.overflow = "hidden";
    }
    
    function closeRecruiter(){

        document.getElementById("recruiterPopup").style.display = "none";
        document.body.style.overflow = "auto";
        
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
        "Deloitte Consulting USI — Salesforce Developer Experience";
        
        document.getElementById("detailContent").innerHTML = `
        
        <p><b>Environment</b></p>
        
        <ul>
        
        <li>Salesforce Sales Cloud</li>
        <li>nCino Loan Lifecycle</li>
        <li>Apex Development</li>
        <li>Record Triggered Flows</li>
        <li>Git Based Development</li>
        
        </ul>
        
        
        <p><b>Key Engineering Problems Solved</b></p>
        
        <ul>
        
        <li>Manual checklist creation during deal lifecycle</li>
        
        <li>Manual backend configuration of treasury services</li>
        
        <li>Large snapshot datasets degrading org performance</li>
        
        </ul>
        
        
        <p><b>Solutions Designed</b></p>
        
        <ul>
        
        <li>Dynamic checklist automation engine using Apex triggers</li>
        
        <li>Opportunity → Treasury cascade automation</li>
        
        <li>Scheduled batch cleanup framework for snapshot data</li>
        
        </ul>
        
        
        <p><b>Architecture Approach</b></p>
        
        <ul>
        
        <li>Trigger → Handler → Service layered architecture</li>
        
        <li>Bulk-safe collections for high-volume processing</li>
        
        <li>Queueable and Batch Apex for async operations</li>
        
        <li>SOQL optimization and governor-limit safe design</li>
        
        <li>Secure Apex enforcing CRUD & FLS</li>
        
        </ul>
        
        
        <p><b>Engineering Impact</b></p>
        
        <ul>
        
        <li>Reduced manual operational effort by ~40%</li>
        
        <li>Improved deal processing efficiency</li>
        
        <li>Automated backend system configuration</li>
        
        <li>Improved org performance through scheduled cleanup</li>
        
        </ul>
        
        `;
        
        document.getElementById("detailPopup").style.display="flex";
                    document.body.style.overflow = "hidden";
            
            
        
        }
        function openCareerBreak(){

            document.getElementById("detailTitle").innerText =
            "Career Break & Skill Development";
            
            document.getElementById("detailContent").innerHTML = `
            
            <p><b>Period</b></p>
            
            <p>Feb 2025 – Present</p>
            
            <p><b>Reason</b></p>
            
            <p>
            Took a short career break due to personal reasons.
            During this time I focused on strengthening my Salesforce
            development knowledge and upgrading my technical skills.
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
    
    function openProject(type){

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
        
        document.getElementById("detailTitle").innerText = title;
        document.getElementById("detailContent").innerHTML = content;
        
        document.getElementById("detailPopup").style.display="flex";
        document.body.style.overflow="hidden";
        
        }
        function closeDetail(){

            document.getElementById("detailPopup").style.display="none";
            document.body.style.overflow = "auto";
            
            
            }
    
    
    
    // ===============================
    // Architecture Explanation
    // ===============================
    
    function showArch(type){
    
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
    window.onclick = function(event) {

        const popup = document.getElementById("detailPopup");
        
        if(event.target === popup){
        popup.style.display = "none";
        }
        
        }
        document.addEventListener("keydown", function(e){

            if(e.key === "Escape"){
            document.getElementById("detailPopup").style.display = "none";
            document.getElementById("skillPopup").style.display = "none";
            document.getElementById("recruiterPopup").style.display = "none";
            }
            
            });
           

            function closeDetail(){
                document.getElementById("detailPopup").style.display="none";
                document.body.style.overflow="auto";
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
                    
                    if (window.scrollY >= sectionTop) {
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

const pageSections = document.querySelectorAll("section");
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

});
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
    
    window.addEventListener("load",animateStats);