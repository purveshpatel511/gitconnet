import React from 'react';
import './user-profile.style.scss';

import TextCard from '../../components/text-card/text-card.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CardGrid from '../../components/cardgrid/cardgrid.component';
import CardList from '../../components/cardlist/cardlist.component';
import Card from '../../components/card/card.component';
import ProjectCardView from '../../components/projectcardview/projectcardview.component';
import VerticalScroll from '../../components/vertical-scroll/vertical-scroll.component';
import SkillCard from '../../components/skill-card/skill-card.component';
import CustomButtonCard from '../../components/custom-button-card/custom-button-card.component';
import FormInput from '../../components/form-input/form-input.component';
import CancelButton from '../../components/cancel-button/cancel-button.component';

import AWSSVG from '../../components/skill-card/programing-language-logos/aws.svg';
import AndroidSVG from '../../components/skill-card/programing-language-logos/android.svg';
import AngularjsSVG from '../../components/skill-card/programing-language-logos/angularjs.svg';
import ApacheSVG from '../../components/skill-card/programing-language-logos/apache.svg';
import AppceleratorSVG from '../../components/skill-card/programing-language-logos/appcelerator.svg';
import AtomSVG from '../../components/skill-card/programing-language-logos/atom.svg';
import BabelSVG from '../../components/skill-card/programing-language-logos/babel.svg';
import BackBonejsSVG from '../../components/skill-card/programing-language-logos/backbonejs.svg';
import BitBucketSVG from '../../components/skill-card/programing-language-logos/bitbucket.svg';
import BootStrapSVG from '../../components/skill-card/programing-language-logos/bootstrap.svg';
import CSVG from '../../components/skill-card/programing-language-logos/c.svg';
import CodeIgniterSVG from '../../components/skill-card/programing-language-logos/codeigniter.svg';
import CPlusPlusSVG from '../../components/skill-card/programing-language-logos/cplusplus.svg';
import CSharpSVG from '../../components/skill-card/programing-language-logos/csharp.svg';
import CSS3SVG from '../../components/skill-card/programing-language-logos/css3.svg';

import GithubSVG from '../../media/github.svg';
import LinkedinSVG from '../../media/linkedin.svg';
import StackoverflowSVG from '../../media/stackoverflow.svg';
import PlusSVG from '../../media/plus.svg';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            name: "Purvesh Patel",
            userid: "purveshpatel511",
            github: "",
            linkedin: "",
            stackoverflow: "",
            tempSkill:"",
            skillCount: 20,
            skills: [
                {
                    key:1,
                    imageURL: AWSSVG,
                    imageText: "Web_Services"
                },
                {
                    key:1,
                    imageURL: AWSSVG,
                    imageText: "Web_Services"
                },
                {
                    key:2,
                    imageURL: BabelSVG,
                    imageText: "Web Services"
                },
                {
                    key:3,
                    imageURL: BackBonejsSVG,
                    imageText: "Web Services"
                },
                {
                    key:4,
                    imageURL: CPlusPlusSVG,
                    imageText: "Web Services"
                },
                {
                    key:5,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:6,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:7,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:8,
                    imageURL: BabelSVG,
                    imageText: "Web Services"
                },
                {
                    key:9,
                    imageURL: BackBonejsSVG,
                    imageText: "Web Services"
                },
                {
                    key:10,
                    imageURL: CPlusPlusSVG,
                    imageText: "Web Services"
                },
                {
                    key:11,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:12,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:13,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:14,
                    imageURL: BabelSVG,
                    imageText: "Web Services"
                },
                {
                    key:15,
                    imageURL: BackBonejsSVG,
                    imageText: "Web Services"
                },
                {
                    key:16,
                    imageURL: CPlusPlusSVG,
                    imageText: "Web Services"
                },
                {
                    key:17,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:18,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    key:19,
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                }
            ]
        }
    }

    renderSaveButton() {
        if(this.state.isEdit){
            return(
                <CustomButton title="Save" onClick={()=>{this.setState({isEdit: false})}} />
            );
        }
        else {
            return(
                <CustomButton title="Edit Profile" onClick={()=>{this.setState({isEdit: true})}} />
            );
        }
    }

    renderGeneralProfile() {
        if(this.state.isEdit){
            return(
                <div className="edit-profile">
                    <VerticalScroll height="450px">
                    <div className="name-section">
                        <div className="title-card">
                            <Card><h3>Name</h3></Card>
                        </div>
                        <FormInput placeholder="Enter Name" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
                    </div>
                    <br /><br />
                    <div className="username-section">
                        <div className="title-card">
                            <Card><h3>Userid</h3></Card>
                        </div>
                        <FormInput placeholder="Enter Username" value={this.state.userid} onChange={(e) => {this.setState({name: e.target.value})}} />
                    </div>
                    <br /><br />
                    <div className="github-section">
                        <div className="title-card">
                            <Card><h3>Github ID</h3></Card>
                        </div>
                        <FormInput placeholder="Github User ID" value={this.state.github} onChange={(e) => {this.setState({name: e.target.value})}} />
                    </div>
                    <br /><br />
                    <div className="linkedin-section">
                        <div className="title-card">
                            <Card><h3>LinkedIN</h3></Card>
                        </div>
                        <FormInput placeholder="LinkedIN ID" value={this.state.linkedin} onChange={(e) => {this.setState({name: e.target.value})}} />
                    </div>
                    <br /><br />
                    <div className="stackoverflow-section">
                        <div className="title-card">
                            <Card><h3>Stackoverflow</h3></Card>
                        </div>
                        <FormInput placeholder="StackOverflow ID" value={this.state.stackoverflow} onChange={(e) => {this.setState({name: e.target.value})}} />
                    </div>
                    </VerticalScroll>
                </div>
            );
        }
        else {
            return(
                <div className="display-profile">
                    <VerticalScroll height="350px">
                        <h2>Name</h2><hr />
                        <span>{this.state.name}</span>
                        <br /><br />
                        <h2>Username</h2><hr />
                        <span>{this.state.userid}</span>
                    </VerticalScroll>
                    <div className="modify-grid">
                        <CardGrid gridColumn="1fr 1fr 1fr">
                            <CustomButtonCard classname="github-social" imageURL={GithubSVG} imageText="github" />
                            <CustomButtonCard classname="linkedin-social" imageURL={LinkedinSVG} imageText="linkedin" />
                            <CustomButtonCard classname="stackoverflow-social" imageURL={StackoverflowSVG} imageText="stackoverflow" />
                        </CardGrid>
                    </div>
                </div>
            );
        }
    }

    addSkill = () => {
        var keyvalue = this.state.skillCount;
        var keyvalue = keyvalue + 1;
        console.log("keyvalue: "+keyvalue);
        this.setState({
            skills: this.state.skills.concat({key:keyvalue, imageURL: BabelSVG, imageText:`${this.state.tempSkill}`}),
            skillCount: keyvalue,
            tempSkill: "",
        });
    }

    
    removeSkillss = (id) => {
        console.log(id);
        this.setState({skills: this.state.skills.filter(
            skill => { return skill.key !== id}
        )})
    }

    renderSkill() {
        if(this.state.isEdit){
            return(
                <div className="edit-skill">
                    <div className="add-new-skill">
                        <FormInput placeholder="Skill" value={this.state.tempSkill} onChange={(e)=> {this.setState({tempSkill: e.target.value})}}/>
                        <CustomButton title="Add Skill" onClick={this.addSkill} />
                    </div>
                    <br />
                    <VerticalScroll height="380px">
                        <div className="modify-grid">
                            <CardGrid gridColumn="1fr 1fr 1fr 1fr">
                                {
                                    this.state.skills.map((skill) => (
                                        <div className="remove-skill-card">
                                            <SkillCard id={skill.key} imageURL={skill.imageURL} imageText={skill.imageText} />
                                            <CancelButton onClick={e => this.removeSkillss(skill.key)}/>
                                        </div>
                                    ))
                                }
                            </CardGrid>
                        </div>
                    </VerticalScroll>
                </div>
            )
        }
        else{
            return(
                <VerticalScroll height="450px">
                    <div className="modify-grid">
                        <CardGrid gridColumn="1fr 1fr 1fr 1fr">
                            {
                                this.state.skills.map((skill) => (
                                    <SkillCard id={skill.key} imageURL={skill.imageURL} imageText={skill.imageText} isRemove="false"/>
                                ))
                            }
                        </CardGrid>
                    </div>
                </VerticalScroll>
            )
        }
    }

    render() {
        return(
            <div className="user-profile">
                    <div className="profile-header">
                        <TextCard text="User Profile" />        
                        {this.renderSaveButton()}
                    </div>
                    <br/><br/>
                <Card>
                    <div className="general-section">
                        <CardGrid gridColumn="1fr 1fr">
                            <Card>
                                <h2 className="inner-header">General Profile</h2>
                                {this.renderGeneralProfile()}
                            </Card>
                            <Card>
                                <h2 className="inner-header">Skill</h2>
                                {this.renderSkill()}
                            </Card>
                                
                    </CardGrid>
                    </div>
                    <br/><br />
                    <div className="user-bookmark">
                        <Card>
                            <h2 className="inner-header">BookMark Projects</h2>
                            <VerticalScroll height="300px">
                                <br />
                                <CardGrid gridColumn="1fr 1fr 1fr">
                                    <ProjectCardView projectTitle="Project1" projectDescription="This is Description">
                                        <CardGrid gridColumn="1fr">
                                            <CustomButton title="Remove" />
                                        </CardGrid>
                                    </ProjectCardView>
                                </CardGrid>
                            </VerticalScroll>
                        </Card>
                    </div>
                    <br /><br />
                    <div className="user-contribution">
                        <Card>
                            <h2 className="inner-header">Contributions</h2>
                            <VerticalScroll height="300px">
                                <br />
                                <CardGrid gridColumn="1fr 1fr 1fr">
                                    <ProjectCardView projectTitle="Project1" projectDescription="This is Description">
                                        <CardGrid gridColumn="1fr 1fr">
                                            <CustomButton title="Accept" />
                                            <CustomButton title="Reject" />
                                        </CardGrid>
                                    </ProjectCardView>
                                </CardGrid>
                            </VerticalScroll>
                        </Card>
                    </div>
                </Card>
            </div>
        );
    }
}

export default UserProfile;