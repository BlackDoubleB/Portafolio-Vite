
import './TargetProject.css';
import propTypes from 'prop-types';
import { Icon } from '@iconify/react';

export const TargetProjects = ({title, descripcion, imgSrc, skills,repoURL,demoURL}) => {
    return(
        <div className="card__portfolio
                        lg:w-[300px] lg:h-[190px]
                        xl:w-[350px] xl:h-[240px]
                        2xl:w-[440px] 2xl:h-72
                        border border-[#9191a3]">
        <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            
        />

        <div className="descripcion__container">
            <h2 className="card__title">{title}</h2>
            <div className="descripcion">
                <p>{descripcion}</p>

                <div className="skills">
                    {
                        skills.map((skill, index) => (
                            <Icon key={index}  className="iconify" icon={skill} />
                        ))
                    }
                </div>

                <div className="buttons">
                    <a className="github"  href={repoURL}>
                        <span>
                            Github
                            {(<Icon icon="quill:link-out" />)}
                        </span>
                    </a>

                    <a className="demo" href={demoURL}>
                        <span>
                            Demo
                            {(<Icon icon="quill:link-out" />)}
                        </span>
                    </a>
                </div>
            </div>
        </div>
</div>

    );
}
TargetProjects.propTypes = {
    title:propTypes.string.isRequired,
    descripcion:propTypes.string.isRequired,
    imgSrc:propTypes.string.isRequired,
    skills:propTypes.array.isRequired,
    repoURL:propTypes.string.isRequired,
    demoURL:propTypes.string.isRequired,
};