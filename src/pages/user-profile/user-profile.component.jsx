import React from 'react';
import './user-profile.style.scss';

import TextCard from '../../components/text-card/text-card.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CardGrid from '../../components/cardgrid/cardgrid.component';
import CardList from '../../components/cardlist/cardlist.component';
import Card from '../../components/card/card.component';
import CardView from '../../components/cardview/cardview.component';
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
            skills: [
                {
                    imageURL: AWSSVG,
                    imageText: "Web_Services"
                },
                {
                    imageURL: BabelSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: BackBonejsSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CPlusPlusSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: BabelSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: BackBonejsSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CPlusPlusSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: BabelSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: BackBonejsSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CPlusPlusSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                },
                {
                    imageURL: CodeIgniterSVG,
                    imageText: "Web Services"
                }
            ]
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

    renderSkill() {
        if(this.state.isEdit){
            return(
                <div className="edit-skill">
                    <div className="add-new-skill">
                        <FormInput placeholder="Skill" />
                        <CustomButton title="Add Skill" />
                    </div>
                    <br />
                    <VerticalScroll height="380px">
                        <div className="modify-grid">
                            <CardGrid gridColumn="1fr 1fr 1fr 1fr">
                                {
                                    this.state.skills.map((skill) => (
                                            <SkillCard imageURL={skill.imageURL} imageText={skill.imageText} isRemove="true" />
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
                                    <SkillCard imageURL={skill.imageURL} imageText={skill.imageText} isRemove="false"/>
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
                        <CustomButton title="Edit Profile" />
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
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
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
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
                                    <CardView />
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