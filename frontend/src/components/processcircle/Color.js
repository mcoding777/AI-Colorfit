import styled from 'styled-components';
import { ContainerDiv } from '../area/ContainerDiv';

export function Color() {
    return (
        <CircleContainerDiv>
            <div className="wrapper">
                <div className="current_circle">
                    <TextH0>
                        얼굴 사진 <br /> 업로드
                    </TextH0>
                </div>
                <div className="left_circle">
                    <TextH0>
                        피부톤 <br />
                        정밀 분석
                    </TextH0>
                </div>
                <div className="left_circle">
                    <TextH0>
                        퍼스널 컬러 <br /> 분석 결과
                    </TextH0>
                </div>
            </div>
        </CircleContainerDiv>
    );
}

// styled-components
const CircleContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 120px;
    color: white;

    .wrapper {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 7px;
        padding-left: 30px;
        padding-right: 30px;
    }

    .wrapper::before {
        content: '';
        width: 50%;
        height: 5px;
        background-color: ${({ theme }) => theme.color.lightgray};
        position: absolute;
        top: 50%;
        left: 100;
    }

    .current_circle {
        width: 130px;
        height: 130px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.blue};
        text-align: center;
    }

    .left_circle {
        width: 130px;
        height: 130px;
        position: relative;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.lightgray};
        text-align: center;
    }

    @media ${({ theme }) => theme.device.mobile} {
        all: unset;

        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 120px;
        color: white;

        .wrapper {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 7px;
            padding-left: 30px;
            padding-right: 30px;
        }
        .wrapper::before {
            content: '';
            width: 50%;
            height: 2px;
            background-color: ${({ theme }) => theme.color.lightgray};
            position: absolute;
            top: 50%;
            left: 100;
        }
        .current_circle {
            all: unset;

            width: 68px;
            height: 68px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.blue};
            text-align: center;
        }
        .left_circle {
            all: unset;

            width: 68px;
            height: 68px;
            position: relative;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.color.lightgray};
            text-align: center;
        }
    }
`;

const TextH0 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 20px;
    }
    margin-top: 38px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
