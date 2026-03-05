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

const roles = [
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
        
        content=`
        
        <p><b>Architecture</b></p>
        
        <div class="architecture-board">
        
        <div class="arch-box">Opportunity Trigger</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Handler Layer</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Checklist Engine</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Task Creation</div>
        
        </div>
        
        <p><b>Tools Used</b></p>
        
        <ul>
        
        <li>Apex Trigger Framework</li>
        <li>Handler Classes</li>
        <li>SOQL Queries</li>
        <li>Task Object Automation</li>
        <li>Record Triggered Flows</li>
        
        </ul>
        
        <p><b>What It Does</b></p>
        
        <p>
        Automatically generates checklist tasks whenever Opportunity stages change.
        The engine dynamically builds tasks based on business pipeline configuration.
        </p>
        
        `;
        
        }
        
        
        else if(type==="cascade"){
        
        title="Opportunity → Treasury Service Cascade Automation";
        
        content=`
        
        <p><b>Architecture</b></p>
        
        <div class="architecture-board">
        
        <div class="arch-box">Opportunity Stage Update</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Trigger Framework</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Service Logic</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Treasury Package Creation</div>
        
        </div>
        
        <p><b>Tools Used</b></p>
        
        <ul>
        
        <li>Apex Trigger Framework</li>
        <li>Custom Objects</li>
        <li>SOQL Relationship Queries</li>
        <li>Bulk Processing Collections</li>
        
        </ul>
        
        <p><b>What It Does</b></p>
        
        <p>
        When opportunities progress through stages, treasury services and product
        packages are automatically created in backend systems.
        This eliminates manual configuration work during deal processing.
        </p>
        
        `;
        
        }
        
        
        else if(type==="snapshot"){
        
        title="Snapshot Bulk Deletion using Scheduled Batch Apex";
        
        content=`
        
        <p><b>Architecture</b></p>
        
        <div class="architecture-board">
        
        <div class="arch-box">Scheduled Job</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Batch Apex</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Snapshot Query</div>
        <div class="arch-arrow"></div>
        
        <div class="arch-box">Bulk Delete</div>
        
        </div>
        
        <p><b>Tools Used</b></p>
        
        <ul>
        
        <li>Scheduled Apex</li>
        <li>Batch Apex</li>
        <li>SOQL Batch Queries</li>
        <li>Governor-Limit Safe Processing</li>
        
        </ul>
        
        <p><b>What It Does</b></p>
        
        <p>
        Large volumes of snapshot records are automatically cleaned using a scheduled
        Batch Apex job to maintain org performance and avoid data growth issues.
        </p>
        
        `;
        
        }
        
        document.getElementById("detailTitle").innerText = title;
        document.getElementById("detailContent").innerHTML = content;
        
        document.getElementById("detailPopup").style.display="flex";
        
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
        function revealSections(){

            const reveals=document.querySelectorAll("section");
            
            reveals.forEach(sec=>{
            
            const windowHeight=window.innerHeight;
            
            const revealTop=sec.getBoundingClientRect().top;
            
            if(revealTop < windowHeight - 80){
            
            sec.classList.add("active");
            
            }
            
            });
            
            }
            
            let scrollTimer;

            window.addEventListener("scroll",()=>{
            clearTimeout(scrollTimer);
            scrollTimer=setTimeout(revealSections,50);
            });            /* SCROLL REVEAL */

function revealSections(){

    const reveals=document.querySelectorAll(".reveal");
    
    reveals.forEach(section=>{
    
    const windowHeight=window.innerHeight;
    
    const revealTop=section.getBoundingClientRect().top;
    
    if(revealTop < windowHeight - 80){
    
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
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop - 120) {
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
function toggleMenu(){

    const menu =
    document.querySelector("nav ul");
    
    menu.classList.toggle("active");
    
    }