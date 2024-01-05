import styled from "styled-components/native";
import SegmentedControlComp from '@react-native-segmented-control/segmented-control';

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background0};
  flex: 1;
  gap: 34px;
  justify-content: space-between;
`;

export const Body = styled.View`
  flex: 1;
  gap: 14px;
  padding: 0 20px;
`;

export const PlansWrapper = styled.ScrollView`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const PlanCard = styled.View`
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.colors.border0};
  border-radius: 8px;
  gap: 16px;
  margin-right: 24px;
  flex: 1;
  min-width: 300px;
  width: 300px;
`;

export const PlanTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
`;

export const PlanPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PlanFeatures = styled.View`
  gap: 16px;
`;

export const PlanFeature = styled.View`
  gap: 16px;
  flex-direction: row;
`;

export const PlanFeatureText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecundary};
`;

export const PlanHeader = styled.View`
  gap: 4px;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const PlanFooter = styled.View`
  gap: 16px;
  justify-content: space-between;
  flex: 1;
`;

export const PlanBadge = styled.View`
  background-color: ${({ theme }) => theme.colors.primary100};
  border: 3px solid ${({ theme }) => theme.colors.primary300};
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const PlanBadgeText = styled.Text`
  text-align: center;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary300};
`;

// export const SegmentedControl = styled(SegmentedControlComp).attrs(({ theme }) => ({
//   tintColor: theme.colors.buttonDisabled,
//   fontStyle: {
//     color: theme.colors.textPrimary,
//   },
//   activeFontStyle: {
//     color: theme.colors.textAuxiliary1,
//   },
//   tabStyle: {
//     backgroundColor: theme.colors.background0,
//   },
// }))
export const SegmentedControl = styled(SegmentedControlComp)`
  background-color: ${({ theme }) => theme.colors.background0};
  border: 1px solid ${({ theme }) => theme.colors.border0};
  height: 50px;
  font-size: 25px;
`;
